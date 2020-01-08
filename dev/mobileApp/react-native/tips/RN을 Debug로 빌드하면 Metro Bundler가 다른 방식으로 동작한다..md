# RN을 Debug로 빌드하면 Metro Bundler가 다른 방식으로 동작한다. 
#TIL/dev/mobileapp/react-native/tips

- Debug로 빌드하면  usb 연결이 끊켰을시 앱이 켜지지않는다. 아마 metro bundler가 PC에서 도는 듯. 
-> 테스트 용으로 팀원 빌드해줄 경우 `Debug`가 아니라 `Release`임을 확인하고 빌드해주기!!