# The useState Hook
#TIL/dev/web/react/Hooks

1. Trigger re-render
	- current State와 다른 state로 useState의 updater function을 trigger하는 순간, React는 해당 component를 re-rendering한다.

2. Preserve values
	- preserve values between renders. ( 함수 내부 variable들은 원래 함수가 종료되는 순간 소멸되지만, useState는 그것을 방지해준다. ) 