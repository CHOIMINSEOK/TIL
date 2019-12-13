# Javascript Array Util Functions
#TIL/dev/language/javascript


1. **Remove certain element in array**

```javascript
[“bar”,”baz”,”foo”,”qux”]

list.splice(list.indexOf(‘foo’),1);
```

[JavaScript: Remove Element from an Array - HostingAdvice.com](https://www.hostingadvice.com/how-to/javascript-remove-element-array/)


2. Copy on array 

**Shallow Copy**
Array.slice()를  활용하면 아주 손쉽게 가능하다.!
하지만 이건  shallow copy 인 것 같고, 

```javascript
var arrayOriginal = new Array(); 
arrayOriginal.push(“a”); 
arrayOriginal.push(“b”); 
arrayOriginal.push(“c”); 
var arrayClone = arrayOriginal.slice(0); arrayOriginal.push("d"); 
arrayClone.unshift(“d”); 

// arrayOriginal => a, b, c, d 
// arrayClone => d, a, b, c

```

[javascript 배열복사(passing by value) 편하게 하기.](https://creator1022.tistory.com/195)


**Deep  Copy**
배열에 Object등이 담겨있을때, 레퍼런스를 복사하는게 아니라, Value를 복사하고 싶다면, 객체를 직렬화해서, 다시 파싱하여 객체를 만들어줘야한다. 

```javascript
var aaa = [0,1,2,3,4]

var bbb = JSON.parse(JSON.stringify(aaa));
```

[JavaScript 레퍼런스 참조없는 배열 복사(Deep Copy) | 감성 프로그래밍](https://programmingsummaries.tistory.com/143)


4. String copy in Javascript

Javascript에서는 기본적으로 String을 Reference로 처리한다. String 기반의 많은 메서드들 역시 reference 기반으로 동작하게 되는데, 이때 deep copy를 하게하는 꿀같은 팁이 있었다. 

```javascript
var string_copy = (‘ ‘ + original_string).slice(1);
```

 [How to force JavaScript to deep copy a string?](https://stackoverflow.com/a/31733628/12330603) 
















