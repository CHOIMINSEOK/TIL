# ScrollView vs FlatList
#TIL/dev/react-native

1. 공홈에 의하면, ScrollView는 Children Component를 한번에 로딩하고, FlatList는 lazy loading한다. 따라서 하위 컴포넌트가 많을 경우 ScrollView에서는 포퍼먼스 이슈가 있다. 
 [ScrollView · React Native](https://facebook.github.io/react-native/docs/scrollview) 


2. 마음일기 작성화면을 ScrollView로 구현할지, FlatList + ItemCell Render Factory를 이용하여 구현할지 잠깐 고민했는데, ScrollView를 사용하기로 결정하였다. FlatList로 구현할 경우, ItemCell이 외부 Container와 격리되어서 Callback을 전달하기 위한 이상한 코드들이 추가되어야하는데, 이게 불필요한 복잡도를 유발하는 것 같다. 

3. 지난 번 도환 PR에서 내가 리뷰 했듯, 반복되는 패턴의 Data 리스트가 아니라면 ListView 형태로 구현했을 때의 이점은 많지않은 것 같다. 그냥 코드 복잡도만 올리는 듯.위의 마음일기 작성화면도 그런 경우인 것 같다. Cell 별 Type을 나눠서 List 형태로 구현할 수 있었으나, 이러면 Callback을 주입하는 군더더기 코드만 늘어날 것 같아서 ScrollView로 구현하기로 하였다. 