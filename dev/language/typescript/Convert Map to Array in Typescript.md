# Convert Map to Array in Typescript 
#TIL/dev/language/typescript

1. HashMap의 interface 혹은 type은 어떻게 지정해야할까? 

`react-native-calendars` 를 참고한 결과,

```typescript
interface DailyRecordsMap {
	[date: string]: DailyRecord[];
}
```

위처럼 하면 되는 것 같다. [xxx: type]으로 key에 대한 type을 지정할 수 있는 듯. 
여기서도 잘 설명해주고 있다 :) 
[TypeScript hashmap/dictionary interface - Stack Overflow](https://stackoverflow.com/a/42211573/12330603)


2. Javascript에서는 해쉬맵이라는게 특별히 없는 것 같고, 기본 오브젝트를 활용하기만 하면 되는 것 같다. 

3. 자, 그러면 HashMap 혹은 object를 어떻게 array로 변환할 수 있을까?  

Object.keys() 를 활용하면 된다! 

```typescript
Object.keys(dailyRecordsMap).forEach((key) => {
    sections.push({ date: key, data: dailyRecordsMap[key] });
  });

```


- - - -

**객체복사하는방법!**

1. Object.assign()을 활용하면 더 간단하게 할 수 있었다. 
```typescript
Object.assign({}, obj);
```


2. eslint가 훨씬 간단한 팁을 줬다. 그냥 Object Destructuring을 하면된다. 
```typescript
{ … obj }
```

꽤 잘 정리해둔 글.
[자바스크립트 객체 복사하기](https://velog.io/@ddalpange/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9D%EC%B2%B4-%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0)