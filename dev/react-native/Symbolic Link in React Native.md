# Symbolic Link in React Native 
#TIL/dev/react-native

1. Symlink(symbolic link)는 뭘까? 
	- 글쎄, 아직까지는 잘 모르겠다 정확하게 뭘 말하는 것인지. 위키백과에 따르면 다른 파일이나 디렉터리에 대한 참조를 포함하고 있는 특별한 종류의 파일이라고 하는데.. 

> 컴퓨팅에서 심볼릭 링크 또는 기호화된 링크는 절대 경로 또는 상대 경로의 형태로 된 다른 파일이나 디렉터리에 대한 참조를 포함하고 있는 특별한 종류의 파일이다. 심볼릭 링크는 이미 1978년까지 DEC와 데이터 제너럴의 RDOS의 미니 컴퓨터 운영 체제에 존재했다 - 위키백과   

	- 그냥 링크라고 생각해도 무방할 듯. symbol로 된 link말하는 것인 듯하다. 
> A symlink or a Symbolic Link is simply enough a shortcut to another file. It is a file that points to another file  
[What is a Symlink?](https://devdojo.com/tutorials/what-is-a-symlink)

- - - -

1. react-native에서 정확히 무엇을 위해 symlink를 사용하는지는 모르겠다. 왠지 core에서 build된 dist 파일을 native에 연결해주는 용도인 듯. 
-> 마인딩 RN 프로젝트 초기에 Core와 Native를 다른 패키지로 분리하여 작업할때 core의 컴파일된 코드를 native에 연결해주기 위해 사용했었음. 

2. 근데, react native에서는 symlink가 잘 동작하지 않는다고 한다. 그래서 wix가 만든 wml을 사용하여 대체해보려고 했다. 
[GitHub - wix/wml: An alternative to symlinks that actually copies changed files from source to destination folders](https://github.com/wix/wml)

3. symlink보다 잘 동작했는지는 모르겠지만,, 결론적으로  말하면 뭔가 계속 안되고 core와 native의 sync를 맞추는데 오버헤드가 지속적으로 들어가서 그냥 wml도 안쓰고 core와 native를 통합하는 작업을 해버렸다. 