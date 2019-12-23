# React.memo()
#TIL/dev/web/react

1. 컴포넌트가 React.memo()로 래핑될때, React는 컴포넌트를 렌더링하고 겨로가를 메모이징한다. 그리고 다음 렌더링이 일어날때 props가 같다면, React는 메모이징된 내용을 재사용한다. 

2. memo를 잘 활용한다면 꽤나 쉽게 최적화를 할 수 있겠다. 

[React.memo() 현명하게 사용하기 | TOAST UI :: Make Your Web Delicious!](https://ui.toast.com/weekly-pick/ko_20190731/)