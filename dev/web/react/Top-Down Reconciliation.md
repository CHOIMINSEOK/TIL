# Top-Down Reconciliation
#dev/web/react


```javascript
ReactDOM.render({
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}, document.getElementById('root'));

```

이것을 호출하면 React는 Form component에게 어떤 element tree를 return하는지 묻게된다. 이것은 점진적으로 하위 tree에 동일한 방식으로 전개된다. 다음과 같이 : 

```javascript
// React: You told me this...
{
  type: Form,
  props: {
    isSubmitted: false,
    buttonText: 'OK!'
  }
}

// React: ...And Form told me this...
{
  type: Button,
  props: {
    children: 'OK!’,
    color: ‘blue’
  }
}

// React: …and Button told me this! I guess I’m done.
{
  type: ‘button’,
  props: {
    className: 'button button-blue',
    children: {
      type: 'b',
      props: {
        children: 'OK!'
      }
    }
  }
}

```

위과 같은 process를 reconciliation이라고 부르는데, ReactDOM.render() 혹은 setState()를 호출하는 순간 시작된다. reconciliation이 끝나면, React는 result DOM Tree를 알 수 있게 되고, renderer( react-dom or react-native )가 필요한 부분만 DOM-node를 업데이트하게된다( react-native에서는 platform-specific view) 



1. react가 굉장히 우아하게 잘 짜여져있다는 것을 알 수 있다. React Core와 UI(react-dom, react-native)의 분리가 굉장히 잘 되어있고, 따라서 Core로직의 변화를 Platform 별로 UI Library만 구현해서 붙이는구나. 



[React Components, Elements, and Instances – React Blog](https://ko.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)






