# typescript에서 enum을 더 우아하게 사용하기
#TIL/dev/language/typescript

1. enum에 object를 대입할 수 있으면 활용도가 매우 높아질 것 같지만 안타깝게도 불가능하다. 
> TypeScript [supports numeric or string-based enums](https://www.typescriptlang.org/docs/handbook/enums.html)  only.   

2. 다음은 enum으로 object를 관리하기 위한 다양한 trick들. 근데 막상 써보면 그다지 우아하지는 않다. 

```typescript
// 1
enum PizzaSize {
    small,
    medium,
    large
}
interface PizzaSizeSpec {
    key: number,
    value: number
}
function getPizzaSizeSpec(pizzaSize: PizzaSize): PizzaSizeSpec {
    switch (pizzaSize) {
        case PizzaSize.small:
            return {key:0, value: 25};
        case PizzaSize.medium:
            return {key:0, value: 35};
        case PizzaSize.large:
            return {key:0, value: 50};
    }
}

// 2
export class PizzaSize {
  static readonly SMALL  = new PizzaSize(‘SMALL’, ‘A small pizza’);
  static readonly MEDIUM = new PizzaSize(‘MEDIUM’, ‘A medium pizza’);
  static readonly LARGE  = new PizzaSize(‘LARGE’, ‘A large pizza’);

  // private to disallow creating other instances of this type
  private constructor(private readonly key: string, public readonly value: any) {
  }

  toString() {
    return this.key;
  }
}

```

