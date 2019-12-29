# Layout in React Native 
#TIL/dev/react-native


Title Component는 Center에 두고, 버튼컴포넌트만 rightAlign하도록하는 정렬은 어떻게 해야하는 걸까?  (Toolbar layout)

1. button  position을 absolute로 주고, parent view의 height를 하드코딩으로 박는다. 
2. 아니면 title 왼편에 empty Icon component를 두고 spread 시키는 방법도 있다. 

1번이 더럽게 느껴졌는데, 도환이 말들어보면 이것도 많이쓰는 듯