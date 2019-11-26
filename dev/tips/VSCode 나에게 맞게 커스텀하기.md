# VSCode 나에게 맞게 커스텀하기
#til/dev/tips

1. Mac에서 VSCode를 제거하더라도 세팅등과 같은 데이터가 따로 관리되어 완전히 지워지지 않는다. 따라서 설정을 완전히 초기화시키기 위해서는 별도의 작업이 필요한데, 다음과 같은 작업을 해주면 된다. 

```script
rm -fr ~/Library/Preferences/com.microsoft.VSCode.helper.plist rm -fr ~/Library/Preferences/com.microsoft.VSCode.plist 
rm -fr ~/Library/Caches/com.microsoft.VSCode 
rm -fr ~/Library/Caches/com.microsoft.VSCode.ShipIt/ 
rm -fr ~/Library/Application\ Support/Code/ 
rm -fr ~/Library/Saved\ Application\ State/com.microsoft.VSCode.savedState/ 
rm -fr ~/.vscode/ 
rm -fr ~/.vscode/extensions
```


[MacOS에서 VSCode 제거하기](https://dbjina.tistory.com/42)


2. VSCode에서 eslint와 prettier 가 말을 안들으면 트러블슈팅하기가 정말 까다로운 것 같다. 뭘 어떻게 해야하는지, 잘되고 있는건지도 확인하기 어려움. 이때는 그냥 VSCode를 초기화하고 하나씩 차근차근 세팅하는게 좋은 것 같다. 방법을 찾아보면 그다지 어렵지않다. 

 [리액트 프로젝트에 ESLint 와 Prettier 끼얹기](https://velog.io/@velopert/eslint-and-prettier-in-react) 


3. `todo-tree` extension을 쓰면 TODO와 같은 Remark Keyword를 이쁘게 highlighting할 수 있다. 

이것은 개꿀 custom setting. extension의 custom setting은 어디 추가하는지 한참 찾다가, ( 당연하게도 ) extension은 각자의 setting.json을 갖고있다는 것을 깨달았다. extension별 settings.json은 vscode 설정의 extension 탭에서 쉽게 접근할 수 있다. 
```
{
    "todo-tree.autoRefresh": true,
    "todo-tree.defaultHighlight": {
        "type": "text-and-comment"
    },
    "todo-tree.customHighlight": {
        "TODO": {
            "foreground": "black",
            "background": "green",
            "iconColour": "green",
            "icon": "check",
            "type": "text"
        },
        "FIXME": {
            "foreground": "black",
            "background": "red",
            "iconColour": "red",
            "icon": "bug"
        },
        "REVIEW": {
            "foreground": "black",
            "background": "cyan",
            "iconColour": "lightblue",
            "icon": "eye"
        },
        "HACK": {
            "foreground": "black",
            "background": "#FFA500",
            "iconColour": "orange",
            "icon": "alert"
        },
        "REF": {
            "foreground": "black",
            "background": "grey",
            "iconColour": "grey",
            "icon": "link",
            "type": "tag"
        }
    },
    "todo-tree.tags": [
        "TODO",
        "FIXME",
        "REVIEW",
        "HACK",
        "REF"
    ]
}
```

 [TIL: Todo Tree a nifty VScode Extension](https://dev.to/jonasbn/til-todo-tree-a-nifty-vscode-extension-16j5) 

4. VS Code에 code snippet을 추가하면 반복되는 코드를 쉽게 입력할 수 있다. 
	- 굳이 extension을 쓸 필요는 없고 그냥 커스텀해서 쓰면된다. 별로 어렵지않음

[Vscode Code Snippets 설정하기](https://nesoy.github.io/articles/2019-03/Vscode-Code-snippet)


5. VSCode의 Explorer에서 불필요한 파일 숨기기
```json
// user settings.json
"files.exclude": {
        "**/.git": true,
        "**/.svn": true,
        "**/.DS_Store": true,
        "**/node_modules": true,
        "**/.idea": true,
        "**/.vscode": false,
        "**/yarn.lock": true,
        "**/tmp": true
    },

"search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/.git": true,
        "**/.DS_Store": true,
        "**/tmp": true,
        "**/coverage": true,
        "**/build": true,
        "**/Pods": true,
        "**/*.xcodeproj": true,
        "**/*.xcworkspace": true
    },
```


6. Network Raw Json Logging
	`react-native debugger`를 활용하면 된다. 
	네트워크 콜을 디버깅하기 위해, React Native Debugger의 메인 패널( 좌측 상단의 어두운 영역)에서 마우스 오른쪽 버튼을 누르고 `Enable Network Inspect`를 누르면 된다. 

 [jhen0409/react-native-debugger](https://github.com/jhen0409/react-native-debugger) 


7. 멀티커서
	- 기본 shortcut : cmd + shift + L
	-> 하지만 나는 ctrl + cmd + g로 바꿔서 쓴다. 




