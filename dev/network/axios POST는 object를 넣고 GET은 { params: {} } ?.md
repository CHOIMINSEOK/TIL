# axios POST는 object를 넣고 GET은 { params: {} } ?
#TIL/dev/react-native #TIL/dev/Network

처음에는 서버 구현이 그렇게 되어있는건줄 알았는데, axios interface 정의를 보니까 그냥 library 구현이 그렇게 되어있는거더라 ㅋㅋ 

```typescript
// axios
get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>; 
post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;
```

위의 interface를 보면, get은 AxiosRequestConfig를 params로 받고, post는 data를 추가적으로 받는다. 아마, protocol이 다르다고 느낀 것은 post는 data에 직접적으로 object를 넣어줘야해서 다르게 느낀 것 같은데, 이부분은 HTTP Protocol 명세가 그렇게 되어있지않은건가 싶기도 하다. 


### HTTP GET/ POST 
그렇게 시작된 HTTP Protocol에 대한 탐구…를 좀 해보고자 했으나.. 조금 리서치해봤는데 내가 원하는 데이터를 찾기가 어려웠다. 아무래도 POST, GET과 같은  프로토콜은 말그대로 프로토콜뿐이라서, 내가 위에서 의문을 품은건 그저 구현상에서 API의 차이인 것 같다. 


[RFC 2616 - Hypertext Transfer Protocol — HTTP/1.1](https://tools.ietf.org/html/rfc2616#section-9.2)
[HTTP 요청/응답 스펙 간략히 이해하기 :: Outsider’s Dev Story](https://blog.outsider.ne.kr/888)


근데 글을 적다보니, 내가 갖고 있는 궁금증은 HTTP Message 구조와 관련있다는 사실을 알게되었다! 

### HTTP Message

POST 요청을 위한 데이터 Payload는 보통 HTTP Message의 본문에 들어간다. 근데, GET 처럼 순수히 리소스를 가져오는 용도의 Requeset는 본문을 사용하지 않고 URI에 정보를 포함시켜서 보내기때문에 interface도 다르게 설계한 듯 하다.  -> 실제로 확인해보니 맞다. 
get을 통해서 params를 넣으면 URL Encoding으로 Request를 날린다. 하지만 POST의 경우 HTTP Message의 본문에 json 포맷으로 바로 보내기 때문에 두개는 그냥 다른 것! 


[HTTP 메시지 - HTTP | MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Messages)


















