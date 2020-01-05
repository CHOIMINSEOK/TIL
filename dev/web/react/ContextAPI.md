# ContextAPI
#TIL/dev/web/react

### 목적
-> 다양한 뎁스의 컴포넌트에게 공통의 데이터를 전달하기 위함이다. 
-> 공식문서에서는 depth를 무시하고 바로 props를 전달하기 위한 목적으로 context api를 사용하는 것은 추천하지 않는다. 이 경우 컴포넌트를 합성하는 방식으로 해결할 수 있다고 함. 실제로 문서를 읽어보면 필요한 props를 전달하는대신 그냥 그 props를 포함한 Component를 전달하는 방식으로 문제를 해결하더라. 

### 사용법
```typescript
//Context 생성
const context = createContext<IContext>();

//Context 주입
<context.Provider value={}></context.Provider>
```


### 레퍼런스
 [Context - React](https://ko.reactjs.org/docs/context.html#when-to-use-context) 
 [합성 (Composition) vs 상속 (Inheritance) - React](https://ko.reactjs.org/docs/composition-vs-inheritance.html) 
