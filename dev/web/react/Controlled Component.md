# Controlled Component
#TIL/dev/web/react

### 정의 
1. State를 기준으로 rendering하도록 구현할 시 Controlled Component라고 한다. 
2. React Component는 Controlled Component로 짜는 것이 권장된다. 

[Forms – React](https://reactjs.org/docs/forms.html#controlled-components)


### 이점
Controlled Component가 좋은 점은 Component를 interface 기반으로 동작하도록하여 input에 대한 output을 예상가능하게 만들어준다는 점이다. 이러한 장점은 기능 변경에 대해 매우 우연하게 코드로 대응할 수 있게 해준다. 개발할때는 왠만하면 Controlled Component로 구현할 것. 