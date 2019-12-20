# RN에서 Image Resource 관리하기 
#TIL/dev/react-native

`example.png`를 예로 들어보자. 

1. 플랫폼 별로 다른 이미지를 렌더링할 수 있다. 
example.ios.png, example.android.png 

2. 디바이스 스크린 해상도별로 다른 이미지를 렌더링할 수 있다. 
origin.png, origin@2x.png, origin@3x.png

3. 각각의 Native Project Source안에서 관리하게끔할 수도 있는데 그다지 권장되지는 않는다. 

https://jongmin92.github.io/2017/01/22/ReactNative/image-res-management(1)/