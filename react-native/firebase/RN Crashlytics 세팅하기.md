# RN Crashlytics 세팅하기
#dev/react-native/firebase

 [https://invertase.io/oss/react-native-firebase/v6/crashlytics](https://invertase.io/oss/react-native-firebase/v6/crashlytics) 

문서를 참고하자. 굉장히 친절하다.

#### 삽질 기록 메모
1. **firebase.crashlytics().crash()를 호출하여 앱을 터지게 했으나 검증이 안됨**
같은 package name( or bundle id)를 가진 다른 프로젝트의 앱을 하나의 firebase app으로 연결할 수 없다.( 적어도 내가 삽질한 바로는) 이것을 검증해 보기 위해서 test firebase project를 파서 똑같이 세팅해봤는데 잘 동작했음. 

하나의 minding firebase project에서 관리하면 더 우아하겠으나, 굳이 그럴 필요도 없는 것 같아서 그냥 새 minding-rn 프로젝트를 만들어서 진행하기로 결정하였다. 

2. **develop, production crash reporting 분리하기**
(적어도 내가 삽질한 바로는) build configuration custom을 통한 develop, production간의 crash reporting 분리가 불가능하다. 이 경우 어떤 방식으로 구분할 것인지 고민이 필요함. + 다른 조직에서는 이걸 어떻게 관리하지?? 방법이 있는데 내가 모르는 것일 수도 있겠다. 

