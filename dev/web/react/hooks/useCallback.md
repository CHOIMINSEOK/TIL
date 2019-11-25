# useCallback
#dev/web/react/Hooks

1. 주로 렌더링 성능 최적화해야할 때 쓰인다. 
2. 이 Hook을 통해서 이벤트 핸들러 함수를 필요할 때만 생성할 수 있다. 


```typescript
…
const onChange = useCallback(e => {
	setNumber(e.target.value);
}, []) // 컴포넌트가 처음 렌더링 될 때만 함수 생성
…
```

