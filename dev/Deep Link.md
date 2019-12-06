# Deep Link 
#TIL/dev

1. **딥링크란?** 특정 콘텐츠에 직접 도달하는 모든 링크를 의미함. 
-> 안드로이드에서는 인텐트 필터의 일종으로 사용자들이 직접적으로 안드로이드 앱 내의 액티비티에 접근하는 것을 허용 

2. 딥 링크의 종류
	1. URL Schemes : 딥 링크의 초기 형태. url 스킴을 앱에 정의하는 방식으로 사용한다. 여러 앱에서 같은 이름의 스킴을 사용할 경우, hijacking 당할 수 있는 치명적인 약점 때문에 2세대 딥링크 표준이 나오게 됨. 
	2. App Link for Android, Universal Link for iOS 
		- App Link란 인증된 웹사이트 URL 기반으로 동작하는 딥링크. 링크 클릭 시 앱이 설치되어 있다면 즉시 열어주고 없다면 웹으로 이동함. 
		- iOS의 경우 2015년부터는 Universal Link를 채택하고, URI Scheme 방식을 차단하고 있음. 
		- Android의 경우 URL Scheme이 여전히 지원되기 때문에 App Link의 도입률이 낮은 편. 
	3. 디퍼드 딥링크 ( 아마 솔루션을 사용하는 방법인 것 같다.  )
		- 앱이 설치되어 있으면 해당 컨텐츠의 화면으로, 설치되어 있지 않으면 App store/ play store로 유입시킨다. 

 [웹에서 앱으로 이동하기 (feat.딥링크)](https://feel5ny.github.io/2019/09/22/Communication_001/) 
 [딥링크란? | Branch](https://branch.io/ko/what-is-deep-linking/) 
