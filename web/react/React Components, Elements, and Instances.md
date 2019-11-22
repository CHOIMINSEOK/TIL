# React Components, Elements, and Instances
#dev/web/react

1. Elements describe the Tree.
	- element는 component instance, DOM node, 그리고 그것들의 속성을 묘사해주는 plain object다. 
	- elements는 오직 component type, 그것의 속성(color), 그리고 child elements 만들 가진다. 
```javascript
{
  type: ‘button’,
  props: {
    className: 'button button-blue’,
    children: {
      type: ‘b’,
      props: {
        children: ‘OK!’
      }
    }
  }
}
```


2. Components Encapsulate Element Trees.
	- React Component는 props를 input으로 받고 element tree를 return한다. 그 형태는 class가 될수도있고, function이 될 수도 있다. 


매우 좋은 레퍼런스인 듯. 
[React Components, Elements, and Instances – React Blog](https://ko.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)