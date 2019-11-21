# React Component의 return 영역은 jsx로 인식된다.
#dev/React/jsx

React Component의 return 영역은 jsx로 인식된다. 

```typescript 
…
return (
	//TODO 보기 않좋다. 
	{Validator.instance.isValid(Rule.EMAIL, signUpForm.email) && (<Text>이메일을 입력하셔야해요:)</Text>)}
)
…
```

위와 같은 코드를 넣으면 터졌다. `Text string must be rendered with in <Text>…` 에러를 내뱉는데, 원인은 주석에 있었따. 

React Component의 return 영역은 jsx로 인지하기 때문에 주석하는 방식도 html style로 해줘야 했던 것. 그래서 `//` 를 주석으로 인지하지 못하고 `/**/`로 해줘야한다! 