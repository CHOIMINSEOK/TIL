# React Hooks 동작원리
#TIL/dev/web/react/Hooks

1. React Hooks가 어떻게 동작하는 건지 궁금했다. 그냥 함수를 호출하는건데 어떻게 State가 보존되며, 이벤트를 후킹할 수 있는 걸까? 


2. useState는 Javascript의 Closure 특성을 이용하여 만들어졌다. 함수가 리턴될때, 해당 함수의 lexical context가 함께 클로져로 반환되는 특성을 이용하여 State를 유지하는 것. 

```javascript
// Example 2
const MyReact = (function() {
  let _val // hold our state in module scope
  return {
    render(Component) {
      const Comp = Component()
      Comp.render()
      return Comp
    },
    useState(initialValue) {
      _val = _val || initialValue // assign anew every run
      function setState(newVal) {
        _val = newVal
      }
      return [_val, setState]
    }
  }
})()


// Example 2 continued
function Counter() {
  const [count, setCount] = MyReact.useState(0)
  return {
    click: () => setCount(count + 1),
    render: () => console.log(‘render:’, { count })
  }
}
let App
App = MyReact.render(Counter) // render: { count: 0 }
App.click()
App = MyReact.render(Counter) // render: { count: 1 }

```


3. useEffect의 내부 구현 원리를 살펴보자. 
```typescript
// Example 4
const MyReact = (function() {
  let hooks = [],
    currentHook = 0 // array of hooks, and an iterator!
  return {
    render(Component) {
      const Comp = Component() // run effects
      Comp.render()
      currentHook = 0 // reset for next render
      return Comp
    },
    useEffect(callback, depArray) {
      const hasNoDeps = !depArray
      const deps = hooks[currentHook] // type: array | undefined
      const hasChangedDeps = deps ? !depArray.every((el, i) => el === deps[i]) : true
      if (hasNoDeps || hasChangedDeps) {
        callback()
        hooks[currentHook] = depArray
      }
      currentHook++ // done with this hook
    },
    useState(initialValue) {
      hooks[currentHook] = hooks[currentHook] || initialValue // type: any
      const setStateHookIndex = currentHook // for setState's closure!
      const setState = newState => (hooks[setStateHookIndex] = newState)
      return [hooks[currentHook++], setState]
    }
  }
})()

```

음 뭔가 어렵다. 잘 이해가 안가네. React의 전체적인 메커니즘과 연관되어있는 것 같기도 하고. 아무튼 여기서 얻을 수 있는 좋은 인사이트는 Hooks의 사용 원칙이 나온이유에 대해 알 수 있다는 점이다. 
-> Rules of Hooks : Only Call Hooks at the Top Level
이 Rurle이 나온 이유는 `currentHook`  variable을 잘 살펴보면 알 수 있다. 



Reference
 [React Hooks는 어떻게 function component를 다시 그릴까?](https://www.awesomezero.com/development/reacthook/) 
 [Deep dive: How do React hooks really work? | Netlify](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/) 
