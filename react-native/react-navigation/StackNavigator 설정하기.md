# StackNavigator 설정하기 
#dev/react-native/react-navigation


1. 의도치 않은 toolbar 제거하기 

```typescript
// createStackNavigotor
headerMode='none'
```
[Opening a full-screen modal · React Navigation](https://reactnavigation.org/docs/en/modal.html)

2. 선택적으로 Header 띄우기 

각 스크린의 두번째 파라미터인 navigationOptions에 `header=null` 추가
```typescript
export default (HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: true ,
    }
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      header:null,
      tabBarVisible: fasle,
    }
  }
}));


  HomeStack.navigationOptions = {
  tabBarLabel: '',
  header: null,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon type='AntDesign' name='home' />
  )
};

```[Selectively enabling the header for some screens only does not work · Issue #3958 · react-navigation/react-navigation · GitHub](https://github.com/react-navigation/react-navigation/issues/3958#issue-313320362)3. Android와 iOS의 Default Toolbar Title Align 정책이 달라서 생기는 이슈가 있었다. 
StackNavigator Config에 `headerLayoutPreset` 설정을 추가하면 된다 .

```typescript
headerLayoutPreset: ‘center'
```[Add headerLayoutPreset option to stack by brentvatne · Pull Request #4588 · react-navigation/react-navigation · GitHub](https://github.com/react-navigation/react-navigation/pull/4588#issue-197884822)

4. iOS의 BackButton Title 없애기 
```typescript
// in navigationOptions
headerBackTitle: null
```를 추가하면 된다. 이때 특이한 건 navigation 시작화면에서 위의 설정을 추가해줘야 한다. [로그인] -> [회원가입]의 flow라고 할때, [로그인] View의 설정에 추가해줘야 한다. 

[createStackNavigator · React Navigation](https://reactnavigation.org/docs/en/stack-navigator.html#headerbacktitle)