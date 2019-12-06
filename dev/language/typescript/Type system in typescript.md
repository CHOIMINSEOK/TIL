# Type system in typescript 
#TIL/dev/language/typescript



## 타업 선언이란 무엇인가? 
1. Type Declaration  : 타입을   사전에 정의할 수 있도록 해준다. 

```typescript 
let isDone: boolean = true
```


2. 정적 타이핑  : 변수를 선언할 때 변수에 할당할 값의 타입에 따라 사전에 타입을 명시적으로 선언 


3. 타입 추론 : 타입 선언을 생략하더라도 값이 할당되는 과정에서 동적으로 타입이 결정됨 

[TypeScript - Typing | PoiemaWeb](https://poiemaweb.com/typescript-typing)


## d.ts란 무엇인가? 
	- 기존 javascript 모듈을 Typescript 에서 사용하기 용이하도록 기존 Javascript 모듈의 타입 정보를 별도의 파일로 선언 
[d.ts 만들기](https://www.slideshare.net/gloridea/dts-74589285)


## tsconfig.json은 무엇인가? 
	- tsconfig.json 파일은 프로젝트를 컴파일하는 데 필요한 루트 파일과 컴파일러 옵션을 지정
	- 여러가지 다양한 옵션들이 있고 그것들을 통해서 설정들을 커스텀할 수 있다. 왠지 import 절대경로 설정도 이걸로 할 수 있을  것 같다. 
	
[tsconfig.json · GitBook](https://typescript-kr.github.io/pages/tsconfig.json.html)

- - - -


## Type sytem in Typescript 
1. 타입스크립트가 하는 일은 타입 선언을 참조하여 모듈을 올바르게 사용하는지 검증하는 것이다. 사실상 모듈 구현부를 불러오는 것이 아니라 타입선언을 불러오는 것이다. 
2. 모듈을 어떻게 불러오느냐에 따라서 typescript의 동작 방식이 달라진다. 
	- 상대경로로 모듈을 불러오는 경우 주어진 경로에 존재하는 .ts, .d.ts 파일을 탐색한다. 해당 위치에 파일이 존재하지 않는 경우 컴파일 오류 를 띄운다. 
	- 비 상대경로 모듈 탐색의 경우 미리 정해진 우선순위에 따라 탐색을 시작하게 된다. 


[타입스크립트 컴파일러가 모듈 타입 선언을 참조하는 과정 - NAVER FE Platform - Medium](https://medium.com/naver-fe-platform/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC%EA%B0%80-%EB%AA%A8%EB%93%88-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8%EC%9D%84-%EC%B0%B8%EC%A1%B0%ED%95%98%EB%8A%94-%EA%B3%BC%EC%A0%95-5bfc55a88bb6)











