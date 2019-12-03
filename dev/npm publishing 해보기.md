# npm publishing 해보기 
#TIL/dev


Wix의 놀라운 캘린더라이브러리인 `react-native-calendars`가 아쉽게도 past scrolling을 지원하지않더라. 근데 엄청 리서치를 해보니 역시 우리의 장인들이 좋은 work around를 잘 찾아놓았고 그걸 레퍼런스해서 working하는 코드를 만들 수 있었다. 하나의 프로젝트에 패키지로 심는 것보다 npm으로 publishing하는게 더 쉬울 것 같아 진행해보았는데 진짜 엄청 쉬웠음.. 


package.json에서 적절한 name과 version, repository 주소를 입력하고, 
```

{
  “name”: “react-native-calendars",
  "version”: “1.22.0”,
  …
  “repository”: {
    “type”: “git”,
    “url”: “git+https://github.com/wix/react-native-calendars”
  },
  
}
```


터미널에서 `npm publish` 해주면 끝. 그럼 npm이 로그인하고 email 인증하라는 요청을 하는데 그냥 해주면 된다. 

