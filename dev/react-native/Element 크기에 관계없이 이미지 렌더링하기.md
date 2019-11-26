# Element 크기에 관계없이 이미지 렌더링하기 
#TIL/dev/react-native

1. <Image>의 source props에 {url: }로 이미지를 읽어들일 수도 있고, require(‘’)를 통해 내부의 이미지를 불러올 수도 있다. 
2. `resizeMode`를 이용하여 이미지가 렌더링되는 사이즈를 조절할 수 있다. 
	`cover` : 가로 세로 중 넓은 영역에 맞춰서 이미지를 그린다. 
	`contain` : 가로 세로 중 좁은 영역에 맞춰서 모든 이미지가 그려질 수 있게 그린다. 


**Reference:** 
 [5.React Native 레이아웃 디자인 - 4부 이미지 컴포넌트와 UI 마무리](https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-4%EB%B6%80-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-UI-%EB%A7%88%EB%AC%B4%EB%A6%AC) 
