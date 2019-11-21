# React Native Custom Button
#dev/react-native

React Native에서의 Button은 iOS와 Android 각 플랫폼의 Native Button들과 통신하기 떄문에 style props를 갖지 않고 속성마다 각각의 props를 갖는다. 이를테면, 이런 방식으로 : 
```typescript
<Button title=“” color=“” />
```

하지만 제약이 많기 때문에 좀더 커스텀하고 싶다면 Touchable Component와 다른 뷰를 조합해서 쓰는 것을 추천한다! 


[reactjs - change button color react native - Stack Overflow](https://stackoverflow.com/questions/41754471/change-button-color-react-native/41754577#41754577)