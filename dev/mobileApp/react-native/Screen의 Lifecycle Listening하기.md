# Screen의 Lifecycle Listening하기 
#TIL/dev/mobileapp/react-native

```typescript
useEffect(() => {
  const listener = navigation.addListener('didFocus', () => {
        console.log('focused!');

  })
  return (): void => {
    console.log('navigation unsubcribe!');
    listener.remove();
  }
}, []);
```

이전과 이후의 화면을 동기화해야할때 매우 꿀같이 쓸수 있다. 