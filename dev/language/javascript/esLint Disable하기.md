# esLint Disable하기 
#TIL/dev/language/javascript

`Missing parentheses around multilines JSXeslint(react/jsx-wrap-multilines)``

갑자기 린트에러가 뜬다! 왜있는건지 구글링해봤는데 가독성을 좋아지게한다고 한다. 굳이란 생각과 prettier랑 conflict나는 것 같아서 그냥 disable 시켰다.

`.eslintrc.js` 의 rules에 ‘react/jsx-wrap-multilines’: ‘off’, 이렇게 추가해주면 된다!

점점 javascript 개발 환경에 익숙해져가는 듯 ㅎㅎ