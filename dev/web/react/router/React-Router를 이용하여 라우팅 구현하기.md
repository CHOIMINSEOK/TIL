# React-Router를 이용하여 라우팅 구현하기 
#TIL/dev/web/react/router


### 사용법 

1.  `react-router-dom` 을 프로젝트에 추가한다. 사용법은 조금만 검색해봐도 알수 있을 정도로 쉽다. 

```typescript 

// App
export default () => (
	<Router>
		<Route exact path=“/” component={Main} />
		<Route path=“/about” component={About} />
	</Router>
)


// to route other page
<Link to=“about”><OtherComponent /></Link>
```



### 라우팅할때 Props 전달하기 

`Route` 의 render props를 사용하면 된다!

```typescript
<Route path=‘/dashboard’ render={(props) => <Dashboard {...props} isAuthed={true} />} />
```

 [Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/) 


### 라우팅을 제대로 세팅했음에도 불구하고 url로 직접 접근시 404가 뜨는 경우. 

-> 클라이언트 사이드 렌더링만 지원해서 그렇다. React App의 경우 SPA(Single Page Application)으로 구현될텐데, 이 경우 Page에 대한 Server Request(API가 아닌) 는 최초 index 화면에서 이루어진다. React Router가 해주는 것은 Client Side Rendering으로 서버 리퀘스트를 날리지 않고 애플리케이션이 자체적으로 처리하는 것. 따라서 서버는 '/life'등과 같은 sub url의 존재를 모를수도 있는 것. 

이에 대한 다양한 해결책이 있는데, 가장 쉬운 것은 HashRouter를 쓰는 것으로 보인다. 이 라우터를 쓰면 # 이후의 라우팅 url은 서버로 보내지 않는다. 따라서 메인 화면을 먼저 로딩하고 난 후 다시 화면을 그리는 듯. 

매우 좋은 레퍼런스다. 

 [React-router urls don't work when refreshing or writing manually](https://stackoverflow.com/a/36623117/12330603) 













