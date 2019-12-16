# Electron 입문
#TIL/dev/electron


1. 기본적으로 Electron Application은 Node.js Application이라 할 수 있다. <- 이때 Node.js Application 이라는 말이 무엇인지 잘 모르겠다.  아무튼, 튜토리얼에서 말하는 것들을 읽어보면 그냥 Node 과 똑같다는 말을 많이하는데, Node를 하면 쉽겠다라는 생각과, Electron을 하면 Node로 넘어가기 쉬울 것 같다는 생각이 같이 든다. 

2. 앱의 시작지점은 package.json이다. 여기에서 앱의 최초 loading entry file과 기타 설정들을 다 명시한다. default entry file은 index.js이다 .

3. Node Application은 Electron Application이랑 매우 유사한데, script를 `node` => `electron`으로 바꿔주기만 하면 된다고. 근데 Module API들은 각각 다르지않을까하는 생각이 들었다. 

4. 설명이 굉장히 친절해서 하나하나 따라하다보니 손쉽게 Hello world를 띄울 수 있었다. 왠지 Electron API과 간단한 PC APP Lifecylce만 익히면 간단한 앱정도는 금방 만들 수 있을 것 같다는 생각이 든다. 테트리스 앱을 이걸로 한번 만들어보면 괜찮을 것 같은데..! 
 


[Writing Your First Electron App | Electron](https://electronjs.org/docs/tutorial/first-app)