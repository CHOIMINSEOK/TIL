# Shadow Effect on Android
#TIL/dev/react-native

iOS에서는 그냥 다음의 옵션을 주면 잘 된다. 근데 Android에서 확인해보면 적용이 안되있음. 
```typescript
shadowOpacity: 0.3,
shadowOffset: { height: 0, width: 0 },
```


Android에서는 `elevation` 옵션을 써야한다!
 [How to set shadows in React Native for android?](https://stackoverflow.com/a/41457692/12330603) 


- - - -

Android에서 `elevation`을 줘도 정상적으로 shadow 값이 안들어가는 경우가 있다. 그래서 좀더 리서치를 해보니, elevation 값에 backgroundColor를 transparent로 주니까 Android에 정상적으로 shadow가 들어갔는데, 이렇게 하니 iOS의 shadow값이 먹지않는다. 
 [React-native shadow not appearing](https://stackoverflow.com/a/44908751/12330603) 


그래서 그냥 Android, iOS 플랫폼별로 Shadow를 그려주기 위한 컨테이너를 만들고 각각 속성을 줘서 구현하였다! 

```typescript
<View style={styles.shadowForAndroid}>
  <View style={styles.shadowForIOS}>
    <Text style={{ marginStart: 16, color: COLORS.GRAY75 }}>
      마음기록하기
    </Text>
  </View>
</View>

const styles = StyleSheet.create({
...
  shadowForIOS: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    flex: 1,
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0.3,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
  },
  shadowForAndroid: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    paddingTop: 4,
    elevation: 1,
  },
...
});
```