# Typescript 학습 기록
#dev/language/typescript

Javascript에 대한 학습을 꼼꼼하게 하니까 Typescript를 익히는 것은 그다지 어렵지 않았다.  레퍼런스 문서를 한번 쭉 읽어보는 정도로도 충분한 듯. 

몇 가지 인상깊은 것들만 적어보았다. 

**`typeof`에 대한 깊은  이해**
1. Typescript는 Javascript 시스템에 static type system을 추가해준다. 이게 무슨말이냐,  type system은 code가 transpile될때 없어진다는 것! [FAQ · microsoft/TypeScript Wiki · GitHub](https://github.com/Microsoft/TypeScript/wiki/FAQ#what-is-type-erasure)
2. typescript의 syntax는 일부 표현식과 명령문은 런타임에서 존재하는 value를 참조하고, 나머지 표현식과 명령문은 design/complie time에 존재하는 types를 참조한다. 
3. value는 types를 갖고 있지만, types 그자체는 아니다. 
4. 중요한 것은, 코드에서 컴파일러가  value를 기대하고 그것을 표현식을 값으로서 찾고 해석하는게 가능한 곳과, type을 기대하고, 그것을 type으로 찾고 해석하는 곳이 각각 존재한다는 것이다. 

즉, typeof x 는 context에 따라서 다른 값을 반환한다! 
> The typeof operator leads a double life. The expression `typeof x` always expects x to be a value, but `typeof x` itself could be a value or type depending on the context:  

```typescript
let bar = {a: 0};
let TypeofBar = typeof bar; // the value “object”
type TypeofBar = typeof bar; // the type {a: number}
```

위와 같은 상황에서 
	1.  let TypeofBar = typeof bar; 에서 typeof는 javascript typeof operator로써 동작하게 된다. 따라서, “object” 가 return 될 것. 
	2. 하지만 type TypeofBar = typeof bar; 이 구분의 경우 transfile 될때 없어지게 되고, typescript type query operator가 static type을 설명하기 위해 동작하게 된다. 그래서 이 경우 {a: number} 를 리턴하게 됨! 

-> `type`이라는 keyword와 typeof가 함께 쓰일경우  Typescript operator로 동작하면서 독특하게 작동하는것 같다! 

- - - -




[Typescript: Check “typeof” against custom type - Stack Overflow](https://stackoverflow.com/questions/51528780/typescript-check-typeof-against-custom-type/51529486#51529486)


**type, typeof**
- `type` alias는 타입의 새 이름을 작성한다. 
- `typeof`는 객체의 type을 string으로 반환해준다. 

```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string”) {
        return n;
    }
    else {
        return n();
    }
}

typeof undefined; *// "undefined"*
typeof true;      *// “boolean”*
typeof 1337;      *// “number”*
typeof “foo”;     *// “string”*
typeof {};        *// “object”*
typeof parseInt;  *// "function”*
typeof Symbol();  *// "symbol”*
```

꽤 괜찮은 레퍼런스 
[TypeScript 핸드북 10 - 고급 타입 | Developer's Record](https://infoscis.github.io/2017/06/19/TypeScript-handbook-advanced-types/)
[Type Queries and typeof in TypeScript — Marius Schulz](https://mariusschulz.com/blog/type-queries-and-typeof-in-typescript)

**Interface**
```Typescript
function printLabel(labelledObj: { label: string }) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: “Size 10 Object”};
printLabel(myObj);

//same with
interface LabelledValue {
	label: string
}

function printLabel(labelledObj: LabelledValue) {
…
}
```


**Optional Properties**
```Typescript
interface SquareConfig {
	color?: string;
	width?: number;
}
…

```


**Custom Hooks를 만들면서**
	- 신기하게도 이런 array를 return할수도 있더라. 
```typescript
const useForm = () : [string, boolean, (input: string) => void]
```

## **Reference**
 [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) 
공홈의 document도 나쁘지않다. 

 [TypeScript 한글 문서](https://typescript-kr.github.io/pages/Basic%20Types.html) 
괜찮은 핸드북. 이걸 한번 쭉 읽었다! 

