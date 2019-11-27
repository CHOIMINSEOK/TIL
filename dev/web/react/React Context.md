# React Context
#TIL/dev/web/react

> Context provides a way  to pass data through the component tree without having to pass props down manually at every level  
> - The React Docs  

1. Context는 Component hierachy를 거치지 않고서도 필요한 데이터를 필요한 곳에 전달하게끔 해주는 API다. 
2. 일반적으로 글로벌하게 접근할 수 있어야하는 데이터의 경우 Context로 관리한다. 


> Here’s the thing, when you’re a hammer, everything looks like a nail. Typically when you first learn about Context, it appears like it’s the solution to all your problems. Just remember, there’s nothing wrong with passing props down multiple levels, that’s literally how React was designed. I don’t have a universal rule for when you should and shouldn’t use Context, just be mindful that it’s common to overuse it.  

3. 너무 중구난방으로 쓰지 않도록 주의할 것. hierachy에 따라 props를 전달해야하는 것은 React의 설계 상 자연스러운 것이다. global한 data 접근을 남용하면 데이터흐름을 관리하기 어려워짐으로 사용에 있어서 주의할 것. 