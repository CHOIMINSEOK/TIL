# React 동작원리 
#TIL/dev/web/react


리액트 내부 동작 매커니즘을 설명해주는 간단한 아티클이었다. 

1.  React의 Virtual DOM과 Diffing(Reconciliation) Algorithm에 대한 이야기. 
-> React가 메모리상에 VDOM Tree를 만들고 Real DOM과 다른 Node가 있다면 그 element에 대해서만 re-rendering한다는 것. 

2. 무슨 일이 있어도 render()를 직접 호출하지 말 것. 렌더링은 위에서 간략하게 설명한 VDOM 및 Diffing Algorithm에 기반하여 철저하게 React에 의해 이루어져야한다. 

[React Virtual DOM Postmortem - JavaScript Teacher - Medium](https://medium.com/@js_tut/react-animated-tutorial-7a46fa3c2b96)