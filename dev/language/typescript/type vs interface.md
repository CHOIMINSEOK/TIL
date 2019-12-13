# type vs interface
#TIL/dev/language/typescript

거의 비슷한 친구인데 소소한 차이가 있다. 

1. 기본적으로 type alias는 interface처럼 동작한다. 
2. 첫번째 차이점은 interface는 새로운 이름을 만드는 반면, type alias 는 새로운 이름을 만들지 않는다. 
```typescript
type Alias = {num: number}
interface Interface {
	num: number;
}

declare function aliased(arg: Alias) : Alias;
declare function interfaced(arg: Interface): Interface; 
```

위와 같은 상황에서 interfaced에 마우스를 올리면, interfaced가 Interface를 리턴한다고 보여줄 것이다. 반면, aliased는 객체 리터럴 타입을 보여줄 것이다. 

3. 두 번째 중요한 차이는 type alias는 expand 되거나 implement 될 수 없다는 것이다. 

[Typescript type과 interface 차이 - Alex - Medium](https://medium.com/@alexsung/typescript-type%EA%B3%BC-interface-%EC%B0%A8%EC%9D%B4-86666e3e90c)