# Infinite Scrolling in React Native
#TIL/dev/react-native

`onEndReached`, `onEndReachedThreshold` 를 이용하여 구현할 수 있다. 

**onEndReached:** user scroll position이 rendered items 의 onEndReachedThreshold에 가까워지면 호출되는 callback. 

**onEndReachedThreshold:** is basically a number which indicates the user's scroll position in relation to how far it is from the end of the visible content, when the user reaches the specified position, the onEndReached callback is triggered.

-> 이때 추가로 불러들 데이터들을 이전 데이터에 concat하여 다시 `data` props로 전달해주면 된다! 


친절한 레퍼런스 
 [Implementing an Infinite Scroll list in React Native](https://scotch.io/tutorials/implementing-an-infinite-scroll-list-in-react-native) 
