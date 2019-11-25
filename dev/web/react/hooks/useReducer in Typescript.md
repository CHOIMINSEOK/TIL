# useReducer in Typescript
#dev/react-native/Hooks

** Typescript 환경에서 useReducer를 쓰려면 몇 가지 알아두면 코드를 훨씬 깔끔하게  만들 수 있다. 

useReducer는 컴포넌트별로 각각 하나의 redux를 달아서 쓰게해주는 듯한 hooks다. 이때, dispatch할 Action의 type을 하나의 string const로 정의할 수 없을까 고민하다가 찾은 개꿀 레퍼런스! 

[Type Queries and typeof in TypeScript — Marius Schulz](https://mariusschulz.com/blog/type-queries-and-typeof-in-typescript)

```typescript
// Tranditional Way
//Actions
const SET_NAME = ‘SET_NAME’;
const SET_AGE = ‘SET_AGE’;

// Action types
type SetName = { type: typeof SET_NAME, payload: string}
type SetAge = { type: typeof SET_AGE, payload: string}

//Action Creators
const setName = (name: string): SetName => {
	return {type: SET_NAME, payload: name}
}
…


export type Actions = SetName | SetAge;
```

Action Type에 SET_NAME과 SET_AGE의 typeof가 다르게 인식되는게 굉장히 신기했다.  실제 런타임에서 콘솔로 찍어보니까 둘다 string이 나온다. 

 **근데 어떻게 다르게 인지되는거지?** 
- **string literal type**으로 각각의 string value가 그 자체로 유니크한 타입으로 쓰인다고 한다. 
뭔가 javascript 혹은 typescript transformer 내부에서 심오한 일이 일어나는 것 같은데, typeof 오퍼레이너 호출에는 동일한 ‘string’을 반환하면서 레퍼런스 비교하는 오퍼레이터에는 다른값을 가지는 듯.. 굉장히 신기하다. 

 [https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types) 


- - - -
민식띠가 매우 좋은 레퍼런스를 찾아줬다. 
여기에 잘 설명되어있는데 이에 대해서는 따로 정리해두겠다. 
[Typescript: Check "typeof" against custom type - Stack Overflow](https://stackoverflow.com/a/51529486/12330603)


