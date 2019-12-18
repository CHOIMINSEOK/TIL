# styled-component
#TIL/dev/web/react

1. RN StyleSheet와는 다르게 각각의 속성에 값을 지정할때, string처럼 넣어주지 않아도 된다. 내부적으로 알아서 파싱하는 듯하다. 

```typescript
const Wrapper = styled.div`
  background-color: red;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;
```

2. RN StyleSheet와는 다르게 CSS에서는 `display` 속성에 ‘flex’값을 줌으로써 flexbox를 활용할 수 있게 된다! 

 [CSS Flex(Flexible Box) 완벽 가이드](https://heropy.blog/2018/11/24/css-flexible-box/) 


3. 스타일을 확장하는 것도 가능하다.
```typescript
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

 [styled-components: Basics](https://www.styled-components.com/docs/basics) 


4. typescript에서 styled-component에 props를 전달하여 스타일링을 하려고 했는데 계속 에러가 나더라. 알고보니, typescript에서는 styled-component의  props Interface도 미리 정의해야 타입에러가 뜨지않는다! 

```typescript
interface FrameProps {
  width: string;
  height: string;
}

const Frame = styled.div`
  border: 1px solid lightgray;
  height: ${(props: FrameProps) => (props.height ? props.height : "700px")};
  width: ${(props: FrameProps) => (props.width ? props.width : "500px")};
`;

```

 [react에 typescript 적용시 styled-components 이슈](https://trustyoo86.github.io/react/2018/08/22/typescript-react-styled-component.html) 


**참고:** 
 [다양한 방식의 리액트 컴포넌트 스타일링 방식 CSS, Sass, CSS Module, styled-components](https://velog.io/@velopert/react-component-styling) 
