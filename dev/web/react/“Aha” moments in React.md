# “Aha” moments in React 
#TIL/dev/web/react

1. fn(data) = View. Your UI is a function of your state and props are to components what arguments are to functions.

2. In React, your entire application's UI is build using function composition and JSX is an abstraction over those functions.

**tl;dr**
	- JSX는 단순히 template language가 아니라, View(Component) Tree에 대한 추상이다. 
	- React는 생성된 View Tree를 비교하여 필요한 업데이트만 도와줄 뿐이다. 
	- JSX는 단지 Javascript일 뿐이라서, Javascript의 이점을 모두 가져갈 수 있으면서 동시에 declarative하다. 


> The most common reaction I see from first timers using React is “React seems cool, but I really don’t like JSX. It breaks my separation of concerns”. JSX isn’t trying to be HTML, and it’s definitely more than just a templating language. There are two important things to realize with JSX. **First, JSX is an abstraction over React.createElement which is a function that returns an object representation of the DOM.** I know that was wordy but the tl;dr is that whenever you write JSX, once it’s compiled, you’ll have a JavaScript object which represents the actual DOM (or whatever View is representative of the platform you’re on, iOS, Android, etc). Then React is able to analyze that object, diff it against the previous object representation of the DOM it created, then update the DOM only where a change occurred. This has some performance upsides to it but more importantly, shows that JSX really is “just JavaScript”. Second, because JSX is just JavaScript, you get all the benefits that JavaScript provides (composition, linting, debugging) but still with the declarativeness (and familiarity) of HTML.  


3. Component don’t necessarily have to correspond to DOM nodes.

4. When two components need to share state, I need to lift that state up instead of trying to keep their  states in sync.
-> 컴포넌트간에 공유되어야할 상태가 있다면 싱크를 맞추려고하지말고, 그 상태를 부모 컴포넌트로 관리하라. 

5. “Inheritance is unnecessary in React, and both containment and specialization can be achieved with composition.” 

React에서 굳이 상속을 쓰려고 하지 말라. 필요한 것들을 함수단위로 나눠서 조합하는 방식으로 구현하라. Hooks를 잘 활용하면 이렇게 될 수 있는 것 같다. 
 [JavaScript Inheritance vs Composition](https://tylermcginnis.com/javascript-inheritance-vs-composition/) 

6. The separation of container and presentational components. 

7. If you try to keep most of your components pure, stateless things become a lot simpler to maintain.









