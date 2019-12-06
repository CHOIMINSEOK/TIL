# Rules of Hooks
#TIL/dev/web/react/Hooks

1. Only call Hooks from top-level of a function component or a custom Hook.

```typescript
function Counter () {
  // 👍 from the top level function component
  const [count, setCount] = React.useState(0)

  if (count % 2 === 0) {
    // 👎 not from the top level
    React.useEffect(() => {})
  }

  const handleIncrement = () => {
    setCount((c) => c + 1)

    // 👎 not from the top level
    React.useEffect(() => {})
  }

  ...
}

function useAuthed () {
  // 👍 from the top level of a custom Hook
  const [authed, setAuthed] = React.useState(false)
}

class Counter extends React.Component {
  render () {
    // 👎 from inside a Class component
    const [count, setCount] = React.useState(0)
  }
}

function getUser () {
  // 👎 from inside a normal function
  const [user, setUser] = React.useState(null)
}
```


> The reason for this rule is because React relies on the call order of Hooks to keep track of internal state and references. if your Hooks aren't called consistently in the same order across renders, React  can't do that.  
이러한 룰이 있는 이유는, React가 state와 reference 관리에 있어서 Hooks 가 호출되는 순서에 의존하기 대문이다. Hooks가 일관적인 순서로 호출되지않으면, React는 그것을 알 수 없다. -> 뭔가 내부구조를 파보면 무슨 말인지 더 잘 알 수 있을 것 같다. 






