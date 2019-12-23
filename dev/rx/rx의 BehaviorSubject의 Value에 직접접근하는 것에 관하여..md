# rx의 BehaviorSubject의 Value에 직접접근하는 것에 관하여. 
#TIL/dev/rx

```typescript
this.growthHabits.next([…this.growthHabits.value, growthHabit]);
```

1. 도환이의 이 코드는 문제가 많은 코드라고 생각했었다. Rx Stream의 Value에 직접 접근하면 무조건 안되는 터부시되는 것이라고 생각했는데, 도환이가 왜 그런지 묻더라. 

2. 이럴때 가장 설득력있는건 문서 혹은 레퍼런스인데, 찾아봐도 잘 안나옴. 오히려 그렇게 쓰는 경우도 좀 있는 것 같았다. `Access value of BehaviorSubject directly on rx`라고 쳐서 몇 개 찾아보았다. 

3. 그냥 나의 인식차원에서 터부시되는 것 때문에 이런 생각을 했던 것 같은데, 결론적으로 무조건 BehaviorSubject에 접근하는게 안좋은 것은 아닌 것 같다. 안티패턴인 상황은, 데이터 스트림이 2개 이상 존재하는 경우 stream을 조합하지않고 하나에 직접 접근할 때 문제가 된다고 여겼는데, 아마 이걸 너무 일반화 시킨 것인듯. 

```kotlin
val rxStream1 = BehaviorSubject.create("111")
val rxStream2 = BehaviorSubject.create("222")

rxStream2.subscribe { value2 -> 
   test( rxStream1.value + value2 )
}
```

4. 스트림이 복잡하지않고 단순한 경우에, 직접 접근을 통해서 데이터를 수정하는 것은 로직 복잡도를 오히려 줄여준다! 