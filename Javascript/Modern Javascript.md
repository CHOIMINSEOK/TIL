# Modern Javascript 학습하기 
#dev/javascript


Native iOS, Android 개발만 하다가 이번에 팀에서 앱을 React Native로 갈아엎기로 하면서 부랴부랴 웹기반 기술들을 학습하게 되었다. 사실 이번 년도 초에 React 외주를 하나 맡으면서 한번 써보긴 했으나, 눈대중으로만 대충 보고 작업하다가 참교육을 많이 받았기에.. 이번에는 기초부터 차근차근 학습을 쌓아가며 진행해보려 한다.

나는 Javascript를 개인적으로 굉장히 싫어했는데, 다른 언어와는 달리 정말 이해되지 않는 동작들이 몇가지 있었기 때문이다. 다른 언어에서 개발하던 기억으로 javascript를 사용하려다가 삽질만하고 이해되지않는 코드를 짜고 그게 몇번 반복되다가 안좋은 인식이 박혀버린 것 같다. 이번에는 그러면 안될 것 같아서 처음부터 공부한다는 마인드로 차근차근 정리해가면서 공부했는데 나름 만족하고 있다. 아직은 미숙하지만, 공부하면서 기록한 것들을 정리하며 써보려고 한다 :) 



**Variable Declarations**
`let` : block scope를 가진다.
`const` : `let` 과 동일하나, immutable하다. 해당 변수에 값을 재할당하지 못할 뿐, 객체라면 내부 프로퍼티는 수정가능할 수도 있다! 
`var`: block이 아닌 function scope 안에 정의된다.
-> function scope에 정의된다는 사실이 나에게는 생소하게 와닿았다. 
-> 이러한 scope에 차이를 갖는 이유는 Hoisting 때문이다. 이는 Javascript Interpreter의 변수 생성 방식과 관련있다. 함수가 시작되기 전에 함수 내부에서 var로 선언된 모든 변수들은 진입시점에 `undefined`가 할당되어, 함수 내부에서는 전역변수처럼 접근할 수 있게되는 것. 

**Object and Array Destructuring**
프로퍼티를 갖는 객체를 한번에 선언하고 싶다면 다음과 같이 선언 가능하다. 
```javascript
// object literal notion
const user = {
	name = ‘Minseok’;
	email = ‘minseok@min.seok’
}
```

ECMA 2015에서 Destructuring이 소개되기 전까지는 한 객체의 프로퍼티를 한번에 Extract할 수 있는 방법이 없었다. 하지만 이제는 가능하다! 

```JavaScript
// before
const name = user.name;
const email = user.email;

// after
const { name, email } = user;
```

destructuring도 처음 봤을때는 띠용이었던 것 같다. 아무래도 block 때문에 더 이상하게 느껴진다랄까. 

배열도 다음과 같이 Destructuring이 가능하다. 
```Javascript
const user = [‘Minseok’, ‘minseok@min.seok’];

// before
const name = user[0];
const email = user[1];

// after
const [ name, email ] = user; 
```

React Hooks에서 
const [signUpForm, dispatch] = useReducer(..) 이런 코드를 보면 뭔가 싶었는데, Array Destructuring이었다. ㅎㅎ

Object Destructuring과 rename을 동시에 진행할 수도 있다. 
```Javascript
const user = { 
	n: ‘minseok’, 
	e: ‘cmss@javascript.com’, 
}; 

const { n: name, e: email } = user; 
console.log(name) // minseok 
console.log(email) // cmss@javascript.com
``` 

Destructuring을 이용하여 function을 좀더 아름답게 활용할수 있겠다

```Javascript
//before
function updateProfile(name, email) {
…
}

updateProfile(‘Minseok’, ‘Minseok@min.seok’)

//after
function updateProfile({ name, email}) {
…
}

updateProfile({
	name: ‘Minseok’,
	email: ‘Minseok@min.seok’
})

// default 값 넣는것도 가능하다. 
function updateProfile({ name, email}) {
	name = name || ‘Minseok’;
	email = email || ‘minseok@min.seok’;
}

updateProfile({
	name: ‘Min’,
})
```


**Short Hand Properties and Method Name**
변수명과 프로퍼티 명이 같다면, 중복하여 지정할 필요가 없다!
```javascript
updateProfile(name, email) {
	return {
		name,
		contact: email,
	}
}
```

+++ ECMA 6부터는 parameter에 `function` 을 생략할 수 있다!

**Computed Property Name**
```javascript
// before
function person(key, value) {
	let person = {}
	person[key] = value
	return person 
}

person(‘age’, 26) // { age: 26 }

// after
function person(key, value) {
	return {
		[key]: value
	}
}

person(‘age’, 26) // { age: 26 }
```

**Template Literals**
```javascript
//before
const hello = ’My name is’ + name;

//after
const hello = `My name is ${name}`
```

**Arrow Function**

- Arrow function의 경우 자신의 context를 생성할 수 없어서 직관적으로 this keyword를 사용할 수 있다. 
- arrow notation에서 function body와 object를 리턴하는 형식이 완벽하게 똑같다. 그래서 object를 리턴하기 원하는 경우 `()`로 감싸야한다!

```javascript
//error
this.setState(() => {
	name: name
})

//work
this.setState(() => ({
	name: name
}))
```

```javascript
this.setState((nextState) => {
	console.log(nextState);
	return {
		name: name,
	}
})

// 이런 방식으로 간단하게도 할 수 있다. 
this.setState((nextState) => console.log(nextState) || ({
	name: name,
}));
```

**this**
this keyword는 다른 context에서 자원( variable, method 등)에 접근할 수 있게 해준다. Javascript에서 this가 독특한 이유는 function이 자신이 호출되는 context를 설정할 수 있기 때문이다. 개인적으로 이때문에 난해함을 좀 겪은 것 같다.  이를  `Explicit Binding`이라고 하는 듯. 

위에서도 언급했는데, arrow notation으로 function을 생성할 경우, function이 자신의 context를 설정하지 못한다. 따라서 직관적으로 this를 사용할 수 있게된다! 


**Babel**
자바스크립트는 굉장히 빠르게 진화하는 언어지만, 브라우저가 그 속도를 따라가는데는 시간이 걸린다. 그래서 바벨이 필요하다! 

> the purpose of Babel is to take your code which uses new features that browsers may not support yet, and transform it into code that any browser you care about can understand.  

바벨은 최신 자바스크립트 문법을 이전 버전 브라우저들이 이해할 수 있는 구버전 문법으로 변환해준다. 이때 코드 자체를 변환하는 compiling 혹은 필요한 메서드나 객체를 추가해주는 pollyfill을 이용하여 호환성 이슈를 해결한다. 

더 자세한 digging은 나중에 필요할때 해보자.. 

**Promise, Async/ Await**
비동기를 처리할 수 있는 두가지 방식

1. Promise
then과 catch로 비동기 처리 
```Javascript
Promise.resolve()
	.then(() ->{…})
	.catch(showError)
```

2. async, await keyword를 이용한 비동기 처리
```Javascript
async () => {
	const token = await getToken()
	…
}
```


**Javascript Module System**
`imports` : 필요한 외부 의존성을 추가
`code` : 모듈 구현 부분
`exports`  : 외부 인터페이스 

기본적으로 자바스크립트는 파일단위로 모듈링하게 된다.  웹팩이 무수히 많은 이런 모듈들은 하나의 파일로 만들어 경량화해주는 듯
 










