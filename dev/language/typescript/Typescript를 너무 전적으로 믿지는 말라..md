# Typescript를 너무 전적으로 믿지는 말라.
#TIL/dev/language/typescript

***** 검증 필요!!!!**

```typescript
constructor( service : DailyRecordRepositoryInputType) {
    this.service = service;
  }
```

Object Parameter로 선언했다고 생각했으나 실수로 아니게 정의한 상황에서, 뷰에서는 object로 넘기도록 코딩한 적이 있다. 이때 특이한 점은 Compile Error가 뜨지 않고 Run Time Error가 뜬다는 것. 

> TypeError: this.service.fetchDailyRecords is not a function  

Typescript도 결국 javascript 기반으로 동작하는 type system이라 compile에서 잡아주는데는 한계가 있는 것 같다. 약간 linting처럼 동작하는 것 같기도하고. 


- - - -

**민식띠의 전언** 
Typescript Compiler는 문제가 없다. cli를 돌려보면 알 수 있듯이, Typescript Compiler는 강력해서 절대 컴파일해주지 않는다. 다만, 문제는 React Native Compiler가 Typescript와의 호환이 불완전하다는 것인데, Type이 맞지않더라도 React Native는 결국 Javascript 기반으로 Compile해주기 때문에 별 문제없이 통과되는 것인듯. 
