# RN Build Mode에 따른 Config Setting 자동화
#TIL/dev/react-native

1. 이것저것 시도해봤지만 `react-native-config` 를 쓰는게 가장 좋더라. 
 [Not working with RN 0.60.4 · Issue #365 · luggit/react-native-config](https://github.com/luggit/react-native-config/issues/365#issuecomment-514487016) 
	- 이때, android config setting에서 flavor를 추가하면, react-native-config의 ext에서 env파일을 바인딩해주는 로직이 먹히지않는다. 
	- android buildType을 수정해도안된다. 내부적으로 dependency 관리하는 로직과 강하게 커플링되어있는듯. 그냥 default build type인 debug와 release를 활용하는 것을 추천 
	- React Native의 gradle script를 잘보면 app versioning 코드가 잘 되어있다. 그거만 잘 커스텀하면 손쉽게 개선할 수 있음. 
2. build Type 별로 bundle Id/ package name은 변경하지 않는 것이 좋은 것 같다. 이것은 한계인 것 같은데, react-native run-android를 해보면 하나의 package name으로 앱을 실행한다(안드로이드에서만 확인해봤음/ Android Studio로 구동할 경우 정상적으로 동작함..). 패키지명은 그냥 release 기준으로 개발하기로하고, displayName(앱이름)만 변경되도록 세팅함 