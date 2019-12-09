# Shadow Effect on Android
#TIL/dev/react-native

iOS에서는 그냥 다음의 옵션을 주면 잘 된다. 근데 Android에서 확인해보면 적용이 안되있음. 
```typescript
shadowOpacity: 0.3,
shadowOffset: { height: 0, width: 0 },
```


Android에서는 `elevation` 옵션을 써야한다!
 [How to set shadows in React Native for android?](https://stackoverflow.com/a/41457692/12330603) 
