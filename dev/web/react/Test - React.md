# Test - React
#TIL/dev/web/react

### Hooks를 테스트하기 위해서는 컴포넌트를 마운트시켜야한다. 

왜냐하면 Hooks의 대전제중 하나는 FC의 최상단에서 호출되어야한다기떄문. 만약 바로 hooks를 테스트해보려고 하면 다음과 같은 에러를 받게 된다. 

> Invariant Violation: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:   
>   
> 1. You might have mismatching versions of React and the renderer (such as React DOM)   
> 2. You might be breaking the Rules of Hooks   
> 3. You might have more than one copy of React in the same app See https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.  

잠깐 찾아봤는데, React Component를 Mount 시킨 상태에서 컴포넌트 내부 필드로 접근하는 방식으로 테스트 가능한듯. 이때 컴포넌트 마운팅은 다음과 같이 시키는데 굉장히 특이하다. 

```typescript
const container = render(<Counter />)
```


[리액트 훅(Hooks): 제 테스트는 어떻게 되나요? | 매일 성장하기 - 김용균](https://edykim.com/ko/post/react-hooks-whats-going-to-happen-to-my-tests/)


### react-testing-library
좀더 찾아보니 라이브러리를 활용하면 좀더 꿀빨면서 hooks를 테스트할 수 있는 것 같다.  나중에 필요한 순간이오면 찾아보고 써보면 좋을 듯. 

 [How to Create and Test React Custom Hooks](https://blog.bitsrc.io/how-to-create-and-test-react-custom-hooks-927fe468c361) 
