# RN Firebase 세팅하기
#TIL/dev/react-native/firebase

 [https://invertase.io/oss/react-native-firebase/](https://invertase.io/oss/react-native-firebase/) 

0. 문서가 굉장히 쉽고 내용도 간단하다. Docs 보면서 하나씩 따라하면됨. 
1. package.json 의존성 추가
```typescript
yarn add @react-native-firebase/app
```

2. firebase console에서 google-service.json 다운받아서 /android/app 에 넣기

3. Android :: build.gradle 의존성 추가하기 
```groovy
// android/build.gradle 
buildscript { 
	dependencies { 
// … 
		classpath ‘com.google.gms:google-services:4.2.0’ 
	} 
}

// bottom of android/app/build.gradle 
apply plugin: ‘com.google.gms.google-services’
```

> Firebase’s verification that your Android application connects to Firebase requires the Analytics module to be installed in your project. This verification is not necessary. You can click "Skip this step" to finish adding your project and return to the Firebase console.  
이거 안드로이드는 Firebase Server에 연결이 잘 안되는데, 실제로 react-native-firebase에 보면 이거 신경안써도 된다는 말이 있었다. 정말 그런진 모르겠으나, 필요할때 다시 보면 될 것 같다. 어차피 Firebase Setting을 이 Library를 이용하여 하게 될 것 같아서. 

4. firebase console에서 GoogleService-Info.plist 다운받아서 Xcode 프로젝트 루트에 추가하기 
문서 참고하기!
[https://invertase.io/oss/react-native-firebase/quick-start/ios-firebase-credentials](https://invertase.io/oss/react-native-firebase/quick-start/ios-firebase-credentials) 