# Singleton in Typescript 
#dev/language/typescript

일반적인 다른 언어랑 별 다른게 없다. 그냥 구현하면 되더라. 이런방식이다. 

```typescript
class MyClass
{
    private static _instance: MyClass;
    private constructor()
    {
        //…
    }
    public static get Instance()
    {
        // Do you need arguments? Make it a regular static method instead.
        return this._instance || (this._instance = new this());
    }
}

const myClassInstance = MyClass.Instance;

```

[How to define Singleton in TypeScript - Stack Overflow](https://stackoverflow.com/a/36978360/12330603)

근데 typescript에서는 위와같은 형태가 anti-pattern이라는 말도 있다.  Name space(module in javascript)를 통해 구현하는게 권장된다고 하더군. 근데 그 이유에 대해서는 말하고 있지 않아서 확실하진 않다. 

```typescript
export namespace Singleton {
    export function someMethod() { … }
}
// Usage
import { SingletonInstance} from "path/to/Singleton";

SingletonInstance.someMethod();
var x = SingletonInstance; // If you need to alias it for some reason
```
[How to define Singleton in TypeScript - Stack Overflow](https://stackoverflow.com/a/30174360/12330603)
