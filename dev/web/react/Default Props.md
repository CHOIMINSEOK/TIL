# Default Props
#TIL/dev/web/react

```javascript
// class component
// class에 static property `defaultProps`를 추가해주면 된다. 
class StarRating extends React.Component {
…
}

StarRating.defaultProps = {
	color: ‘#ECB244’
}
```


```javascript
// functional component
// `=`로 대입해주면 된다. object의 경우 `:`로 대입해서 헷갈리기 쉬운 것 같다.
function StarRating({ color = '#ECB111' }) {
}
```