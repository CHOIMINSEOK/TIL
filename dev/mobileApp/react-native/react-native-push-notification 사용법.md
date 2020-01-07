# react-native-push-notification 사용법
#TIL/dev/mobileapp/react-native

### 기본 사용법
1. Notification을 관리하기 위해서는 로컬에서 id를 갖고 있어야한다. 
-> android의 경우 id 값을 notification object에 바로 넣어주면되고, iOS의 경우 userInfo 내부에 id값을 설정해줘야한다. 
-> repeatType을 `day`로 설정해놓으면 하루간격으로, `week` 으로 하면 일주일 간격으로 된다. 이부분은 API 명세를 보면 자세히 알수있음. 


### 한계
PushNotification의 Interface를 보면 모든 API들의 return 이 void이다. API Call 성공여부를  알수 없음 ㄷㄷ. 거의 믿음으로 가져가는데 production에서 치명적일수도 있겠다는 생각이듬.