# React Native 키보드 대응 
#dev/react-native

1. 일반적으로는 KeyboardAvoidingView를 사용하면 될 것 같다. 사용법은 굉장히 단순하다. 그냥 Docs를 보면 익힐 수 있다. [KeyboardAvoidingView · React Native](https://facebook.github.io/react-native/docs/keyboardavoidingview)
2. 근데, 버그가 많다. 왜 안되는지는 모르겠으나 안되는 경우가 있음. 그럴때의 트러블 슈팅을 어떻게 하는게 좋은지 아직은 잘 모르겠다. React Native의 경우 얘네들이 구현해놓은게 없을 때 workAround를 찾는게 엄청 빡샌 듯.  
3. 꽤 괜찮은 라이브러리하나를 발견했다. scrollView면서 Keyboard에 반응하는 뷰인데, 왠만한 상황에서는 이걸쓰면 해결될 듯 :) 
[APSL/react-native-keyboard-aware-scroll-view](https://github.com/APSL/react-native-keyboard-aware-scroll-view) 
