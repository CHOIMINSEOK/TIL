# Xcode에서 추가해주지않은 file의 클래스는 다른 class에서 참조하지못한다(아마도)
#TIL/dev/native/iOS


나의 예측이지만 맞을 것 같다. Xcode가 파일별 reference들을 관리해주니까. 
-> react-native-charts-wrapper의 ios모듈에 Util 클래스를 추가하려다가 안되서 생각해본 결과. 

