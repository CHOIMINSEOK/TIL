# Object 를 Json String으로 Serializing/ Deserializing하기 
#TIL/dev/language/javascript

1. JSON.stringify/ JSON.parse를 사용하면 되는 듯. 매우 간편하다. 
2. JSON.parse는 return값이 object임을 주의하자. 특정 클래스로 만들고 싶다면 그 constructor로 매핑해줘야함. 애석하게도 RN에서 typescript는 이런 것들을 잡아주지 못한다. 