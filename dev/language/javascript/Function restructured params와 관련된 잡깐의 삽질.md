# Function restructured params와 관련된 잡깐의 삽질
#TIL/dev/language/javascript

```typescript
// view
fetchDailyRecord();

// 1. working
async fetchDailyRecords(period: DailyRecordPeriod): Promise<DailyRecord[]>

// 2. not working with `felt_at__gte of undefined`
async fetchDailyRecords({
	felt_at__gte,
	felt_at__lt,
}: DailyRecordPeriod): Promise<DailyRecord[]>
```

1.  1의 경우 period라는 object에 reference를 할당하는거라 아무것도 입력안해도 별 상관없이 잘 동작하는 것. 
2. 하지만 2의 경우 호출과 동시에 object destructuring이 일어나야하는데, 입력한게 없어서 destructuring 할 object가 undefined인 것. 
3. 도환왈) 2의 경우는 1에서 `period.XXX` 를 호출하면 undefined 에러가 뜨는 것과 동일한 거라고 한다. 
4. 자바스크립트가 아직 익숙하지 않아서 생긴 잠깐의 삽질. 동료에게 질문을 던짐으로써 빠르게 의문을 해소할 수 있었다. 