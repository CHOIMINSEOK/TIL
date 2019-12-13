# typescript에서 type에 대한 다양한 꿀팁들
#TIL/dev/language/typescript


1. 
> properties in object literals that do not have a corresponding property in the type they’re being assigned to are flagged as errors.  
-> 이러한 에러가 뜬다면, 대부분 사용하는 코드 혹은 정의하는 코드에서 typo가 있을 것이다. 


2. 몇몇 property만 타입 체크를 하고 싶다면: type casting을  통해 타입체킹을 하라! 

```typescript
interface Options {
    x?: string;
    y?: number;
}

// Error, no property ‘z’ in ‘Options’
let q1: Options = { x: ‘foo’, y: 32, z: 100 };
// OK
let q2 = { x: ‘foo’, y: 32, z: 100 } as Options;
// Still an error (good):
let q3 = { x: 100, y: 32, z: 100 } as Options;
```


3. 몇몇 프로퍼티는 코드에서 추가하고 싶다면 : `[others: string]: any;`

```typescript
interface Model {
  name: string;
  [others: string]: any;
}
function createModel(x: Model) { … }

// OK
createModel({name: ‘hello’, length: 100});

```


4. Type을 중첩하여 선언할 수 있다! 

```typescript
let x: Dog|Cat|Horse;
```


4. This type is sometimes open and sometimes not
& 를 이용하여 선택적으로 property를 취할 수 있다. 굉장히 신기하네. 

```typescript
interface DataModelOptions {
  name?: string;
  id?: number;
}
interface UserProperties {
  [key: string]: any;
}
function createDataModel(model: DataModelOptions & UserProperties) {
 /* … */
}
// findDataModel can only look up by name or id
function findDataModel(model: DataModelOptions) {
 /* … */
}
// OK
createDataModel({name: 'my model', favoriteAnimal: 'cat' });
// Error, 'ID' is not correct (should be 'id')
findDataModel({ ID: 32 });

```




[typescript - Why am I getting an error "Object literal may only specify known properties”? - Stack Overflow](https://stackoverflow.com/a/31816062/12330603)