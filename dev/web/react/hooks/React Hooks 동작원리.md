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


Reference
 [React Hooks는 어떻게 function component를 다시 그릴까?](https://www.awesomezero.com/development/reacthook/) 
 [Deep dive: How do React hooks really work? | Netlify](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/) 
