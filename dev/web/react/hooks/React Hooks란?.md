# React Hooks란? 
#TIL/dev/web/react/Hooks

1. useState :: 상태관리를 해준다. 

2. useEffect :: Lifecycle method 

	- class component 기반의 Lifecycle과는 다르다. View Component의 Lifecycle에 초점을 맞추지않고, State Synchronization에 맞춰서 Lifecycle이 생긴다. 
	- 함수의 인자는 1) function 2) optional array 이다. 
	`function` 은 side effect를 정의한다.
	`optional array`는 side effect가 언제 발생되어야하는지 정의한다.   

```typescript
React.useEffect(() => {
	document.title = `Hello, ${username}`
}, [username])
```

3. customHooks :: Decoupling non-ui logic from ui
	- 비즈니스 로직을 UI와 분리하여 재사용가능하게 만든다. 

```typescript
function useRepos(id) {
	const [repos, setRepos] = React.useState([])
	const [loading, setLoading] = React.useState([])

	React.useEffect(() => {
		setLoading(true)
		
		fetchRepos(id)
			.then((repos) => {
				setRepos(repose)
				setLoading(false)
			})
	}, [id])

	return [ loading, repos ]
}

// View
function ReposGrid ({ id }) {
	const [loading, repos] = useRepos(id)
}
```