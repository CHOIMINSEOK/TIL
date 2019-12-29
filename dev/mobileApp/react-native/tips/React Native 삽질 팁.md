# React Native 삽질 팁
#TIL/dev/react-native/tips


### RN에서 왠진 모르게 뭔가 안되고 있다면 반드시 시도해볼 것
1.  Metro Bundler 껐다 켜보기
2. vs code 껐다가 키기
3. node modules 다시 설치하기 : rm -rf node_modules 조지고 Metro Bundler 다시 키기 
4. `native/ios`에서 `pod install` 하기


### core에서 수정이 있었는데 뭔가 안된다면
1. yarn build —watch
2. wml start
3. 근데도 안된다면 : native && rm -rf node_modules && yarn install


### Android에서 갑자기 run time error가 뜬다.  metro bundler를 restart하는 것으로는 고쳐지지 않는다. 
-> 앱을 다시 빌드하면 된다 ㅎㅎ 


### run-android하니 metro bundler에 연결되지 않았다는 에러가 뜬다. ios에서는 정상 동작
	- 다른 에뮬레이터로 빌드해보기 
	- vscode/ metro bundler/ rebuild 등등을 해봤지만 해결방법을 아직 못찾았음. 
	- 관련한 이슈도 찾았지만 쭉 훑어봤는데 working하는 solution을 찾지는 못했다. 이 에러를 만난다면 좀더 고생해야할듯. 


 [Could not connect to development server on android emulator and on real device · Issue #15388 · facebook/react-native](https://github.com/facebook/react-native/issues/15388) 
