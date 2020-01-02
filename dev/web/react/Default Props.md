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


- - - -
왠진 모르겠지만, 타입스크립트에서 바로 위에 적힌 방법대로 하면 typescript transcompiler가 default props를 인식하지 못하는 것 같다. 이럴때는 FC의 static defaultProps에 PropsInterface를 대입해주고, defaultProps에 값을 넣어주면 된다. 
```typescript

interface AAAProps {
	a: number,	
	b: string,
}
const AAA: React.FC<AAA> = ({	
	a,
	b,
}) => {
	static defaultProps = AAAProps;
}

AAA.defaultProps = {
	a: 5,
  b: ‘’
}
```