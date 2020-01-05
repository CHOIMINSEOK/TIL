# useRef
#TIL/dev/web/react/Hooks

useRef는 크게 두 가지 형태로 사용된다. 

### Accessing the DOM nodes or React Element.
```typescript
import React, { Component, createRef } from "react";

// class component
class CustomTextInput extends Component {
  textInput = createRef();

  focusTextInput = () => this.textInput.current.focus();

  render() {
    return (
      <>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>Focus the text input</button>
      </>
    );
  }
}

// in functional components
const CustomTextInput = () => {
  const textInput = useRef();

  focusTextInput = () => textInput.current.focus();

  return (
    <>
      <input type="text" ref={textInput} />
      <button onClick={focusTextInput}>Focus the text input</button>
    </>
  );
}
```

### Keeping a mutable variable
**in class component**
	- in the component state
	- in an instance variable

**in functional component**
	- in a state variable: `useState`, `useReducer`
	- in a ref: class component에서의 instance variable과 같다. `.current`를 mutate 시키는 것은 re-render를 트리거하지 않는다. 


- - - -

**useRef를 렌더링할때 세팅하지말라.**
> ⇒ “Unless you’re doing lazy initialization, avoid setting refs during rendering — this can lead to surprising behavior. Instead, typically you want to modify refs in event handlers and effects.”  
> ⇒ All side effects should be done in the “Layout phase” or in the “Commit phase”. In terms of React Hooks, inside the useLayoutEffect or the useEffect.  

```typescript
import React, { useRef } from "react";

// bad
const RenderCounter = () => {
  const counter = useRef(0);
  
  // Since the ref value is updated in the render phase,
  // the value can be incremented more than once
  counter.current = counter.current + 1;
  
  return (
    <h1>{`The component has been re-rendered ${counter} times`}</h1>
  );
};

// good
const RenderCounter = () => {
  const counter = useRef(0);
  
  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    counter.current = counter.current + 1;
  }); 
  
  return (
    <h1>{`The component has been re-rendered ${counter} times`}</h1>
  );
};
```



### 주의사항 
-> Functional Component는 instance를 생성하지않기 때문에 ref를 잡을 수 없다. 
단, 방법이 있긴한데, useImperativeHandle을 쓰는 것. 근데 Docs에서 imperative code는 거의 대부분의 상황에서 비추천한다고 대놓고 나와있어서 그냥 안쓰는게 좋을듯. 

 [Refs and the DOM - React](https://reactjs.org/docs/refs-and-the-dom.html#accessing-refs) 
 [React hooks and functional component ref](https://stackoverflow.com/a/58412304/12330603) 


-> useRef의 current는 실제로 mutable한데, typescript에서는 read-only로 되어있다. 서로 다르게 개발을 진행하니까 이런 이슈도 생길 수 있는 듯. 우선 발생하는 에러는 무시하고 진행해도 정상적으로 동작한다. 

[@types/react RefObject.current should no longer be readonly · Issue #31065 · DefinitelyTyped/DefinitelyTyped · GitHub](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065)









