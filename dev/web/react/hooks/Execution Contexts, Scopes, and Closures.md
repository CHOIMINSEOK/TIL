# Execution Contexts, Scopes, and Closures
#TIL/dev/web/react/Hooks


> Just like functions/ modules/ packages allow you to manage the complexity of writing code, Execution Contexts allow the Javascript engine to manage the complexity of interpreting and running your code.   

Execution Context는 Javascript Engine이 코드를 해석하고 돌리는데 있어 복잡도를 줄여준다. 

**Global Execution Context**
	1. 코드를 실행할때 가장 먼저 실행 되는 Execution Context. 
	2. global object와  variable을 가진다. 
	3. brower에서 구동할 경우, window라는 global object를, node에서 구동할 경우 global이라는 object를 reference하게 됨. 


**Function Execution Context**
	1. function이 invoke될때마다 생성된다. 


** 함수 콜스택이랑 비슷한 친구들인듯. 프로그램이 시작하거나 함수가 호출될 때 생성되는 Execution Context가 하나의 스택프레임처럼 동작하는 것 같다. 이러한 Context들이 Javascript 내부적으로 구현되어있고, engine이 관리하는 것 같다. 이러한 Context들고 인해 Scope가 생기고 Closure라는 개념도 생기는 듯. 