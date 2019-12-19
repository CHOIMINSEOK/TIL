# Date Parsing in Javascript
#TIL/dev/language/javascript

1. date time string format일 경우, 그냥 Date 객체를 생성할때 contructor에 전달해주기만 해도 되는 것 같다. 아래 MDN의 설명에 친절하게 나와있는데, Timezone에 관계없이 그냥 parsing해주는 듯. 

> The standard string representation of a date time string is a simplification of the ISO 8601 calendar date extended format (see Date Time String Format section in the ECMAScript specification for more details). For example, “2011-10-10” (date-only form), “2011-10-10T14:48:00” (date-time form), or “2011-10-10T14:48:00.000+09:00” (date-time form with milliseconds and time zone) can be passed and will be parsed. When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as local time.  

 [Date.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) 
