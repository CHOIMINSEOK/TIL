# convert Array to Map in Javascript
#TIL/dev/language/javascript

1. Object.values(dailyRecordsMap).flat()으로 가능하다.
2. 개꿀이라 생각했지만, Property ‘values’ does not exist on type 'ObjectConstructor’라는 에러가 뜨면서. 안된다.  찾아보니, 우리 프로젝트는 es2016으로 설정되어있는데, values는 es2017부터 사용할 수 있더라. 

3. 간단하게 keys를 이용해서 구현할 수 있었는데, 
```typescript	
Object.keys(dailyRecordsMap).map((key)⇒ dailyRecordsMap[key]).flat()
```

으로 하면 되더라. 

 [How to use Object.values with typescript?](https://stackoverflow.com/questions/42966362/how-to-use-object-values-with-typescript/42967397) 
