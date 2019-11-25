# React Navigation 구조 설계하기
#dev/react-native/react-navigation


StackNavigator를 사용할 경우 각 화면별로 Navigator를 만들어주는 줄 알았다( Naviagator도 뷰의 depth를 반영해서 설계해야하는 줄 알았다는 소리). 근데 그게 아니었음. 하나의 StackNavigator에서 쓰이는 Screen Component들은 Root Navigator에 일괄 정의해두고, 각각의 뷰에서 필요한 화면 전환을 호출해주면 된다. 

```typescript
const AuthNavigator = createStackNavigator(
  {
    [NAVIGATION_KEYS.AUTH.SIGN_IN]: {
      screen: SignIn,
      navigationOptions: {
        header: null,
        headerBackTitle: null,
      },
    },
    [NAVIGATION_KEYS.AUTH.SIGN_UP]: {
      screen: SignUp,
      navigationOptions: {
        title: '회원가입',
        headerBackTitle: null,
      },
    },
    [NAVIGATION_KEYS.AUTH.TERM_OF_USE]: {
      screen: createWebView({
        url: WEBVIEW_URL.TERMS_OF_USE,
      }),
      navigationOptions: {
        title: '이용약관',
      },
    },
  },
  {
    initialRouteName: NAVIGATION_KEYS.AUTH.SIGN_IN,
    headerLayoutPreset: 'center',
  },
);

```

여기서 화면전환은 `SignIn` -> `SignUp` -> `TermsOfUse` 이렇게 한 depth씩 들어가는데 이러한 화면의 정의는 RootNavigator인 AuthNavigator에 일괄적으로 해두면 된다 :) 