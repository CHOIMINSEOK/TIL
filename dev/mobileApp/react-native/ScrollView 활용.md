# ScrollView 활용
#TIL/dev/mobileapp/react-native

1. ScrollView에서 Content Offset 얻기 
```typescript
<ScrollView onScroll={this.handleScroll} />

handleScroll: function(event: Object) {
 console.log(event.nativeEvent.contentOffset.y);
},

```

[ios - Get current scroll position of ScrollView in React Native - Stack Overflow](https://stackoverflow.com/a/29515539/12330603)


2. Content Padding을 넣을 수 있다. 
	- 일부 컴포넌트를 덮고서 스크롤 가능하게끔 구현하고 싶을때. iOS는 contentInset 속성으로 구현할 수 있지만 Android는 그런 native 속성을 지원하지 않는다. 하지만, 우리의 RN은 구현해놓았다. 
	-> `contentContainerStyle`을 활용하면 된다.

[Android ListView/ScrollView Content Padding · Issue #2914 · facebook/react-native · GitHub](https://github.com/facebook/react-native/issues/2914)


3. Scroll Event의 throttling을 조절할 수 있다. `scrollEventThrottle`에 값을 넣어주면 된다. default value는 0인데, 이것은 스크롤 발생 최초에만 event를 발생시킨다는 뜻. throttle value를 더 올려주면 스크롤에 따른 섬세한 UI 조정이 가능하다. 