# Children in React
#TIL/dev/web/react

일단 html에 데이터를 전달하듯, tag 사이에 데이터를 넣을 수 있는 방법이 있다. 

```javascript
<Header> My name is </Header>
```

이때 위에서 전달한 data들은 `props.children`으로 접근할 수 있다. 

```javascript
function Header({ children }) {
	return (
		<h1 className=‘header'>
			{children}
		</h1>
	)
}
```