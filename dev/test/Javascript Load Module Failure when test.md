# Javascript Load Module Failure when test
#TIL/dev/test

### 발생
 `react-native-gesture-handler` 를 참조하고 있는 module에서 enum을 Import해서 썼는데, react-native-gesture-handler 로드가 실패하면서 테스트가 동작하지 않음. enum말로 다른 임의의 interface를 import해봤는데 그때는 됨. 일단 문제의 enum을 다른 파일로 분리하여 원인제거. 


### 내가 생각하는 원인
특정상황에서 import 는 전체모듈에 대한 로딩을 트리거한다. 그 특정 상황이 무엇인지에 대해서는 아직 알지못했다. 커뮤니티에 물어봤는데도 딱히 도움되는 답을 얻지는 못함. 
-> Javascript 의존성 관리가 내생각대로 동작하지 않을때도 있다. 따라서 뭔가 문제가 발생했을시 예상치못한 모듈 로딩으로 인한 문제는 아닌지도 점검할  것.