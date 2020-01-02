# Class Component in typescript 
#TIL/dev/web/react

0. 이 아티클이 가장 잘 설명하고 있는 것 같다. 차근차근 따라 읽어보면 도움된다. 
 [TypeScript and React: Components](https://fettblog.eu/typescript-react/components/) 

1. state를 props로부터 전달된 값을 통해 초기화 하고 싶다면  constructor를 사용하는 것이 좋다. 이때, state를 최초로 초기화할때는 반드시 객체를 할당하는 방식으로 해야한다. 

```typescript
constructor(props: ToastProps) {
    super(props);
	  this.state = {
      isShow: false,
      text: '',
      opacityValue: new Animated.Value(props.opacity),
    });
  }
```

 [ReactJS this.state null](https://stackoverflow.com/a/35121888/12330603) 


2. 다른 함수에서는 props와 state를 destructuring해서 쓰면 된다. 
```typescript
aMethod() { 
	const {…} = this.props … 
}
```


3. 