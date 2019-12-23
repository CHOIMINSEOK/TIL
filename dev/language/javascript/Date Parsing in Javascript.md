# Date Parsing in Javascript
#TIL/dev/language/javascript

1. date time string format일 경우, 그냥 Date 객체를 생성할때 contructor에 전달해주기만 해도 되는 것 같다. 아래 MDN의 설명에 친절하게 나와있는데, Timezone에 관계없이 그냥 parsing해주는 듯. 

> The standard string representation of a date time string is a simplification of the ISO 8601 calendar date extended format (see Date Time String Format section in the ECMAScript specification for more details). For example, “2011-10-10” (date-only form), “2011-10-10T14:48:00” (date-time form), or “2011-10-10T14:48:00.000+09:00” (date-time form with milliseconds and time zone) can be passed and will be parsed. When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.  

 [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 



2. Date.parse를 신뢰하면 안된다는 이야기를 들었다. 
-> Date()를 이용해서 날짜를 파싱하기보다는 유틸리티 라이브러리(date-fns)를 이용하는게 더 좋다고 한다. JS의 Date()는 신뢰할 수 없기때문이라고 함. 

> Date생성자(와Date.parse)를 사용해 날짜 문자열에서 시간을 알아내는건 하지 않는 것이 좋습니다. 브라우저 간 차이와 여러 비일관성이 존재하며 RFC 2822 규격 문자열의 지원은 관례일 뿐입니다. ISO 8601 규격 문자열은 시간 정보가 없을 때(“1970-01-01” 등) 현지 시간이 아닌 UTC 기준으로 처리합니다.  

MDN 문서를 보면,  위처럼 브라우저별로 구현한 자바스크립트 엔진의 동작이 다를 수 있기에, 왠만하면 `date-fns`를 쓰자! 

[Date - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)
[Date.parse() - JavaScript | MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)


3. Date.parse 대신에 date-fns의 parseISO()를 쓰자! 

 [Modern JavaScript Date Utility Library](https://date-fns.org/v2.0.0-alpha.27/docs/parseISO) 
