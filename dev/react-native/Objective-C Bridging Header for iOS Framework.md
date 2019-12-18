# Objective-C Bridging Header for iOS Framework 
#TIL/dev/native/iOS #TIL/dev/react-native

1. Xcode의 Auto Generate Prompt를 확인하려면 Empty Swift 파일을 하나 만들어야 한다. 그전까지는 alert가 뜨지않음. 놀랍게도, 이유는 모르겠지만, Bridging Header가 추가되더라도 Empty Swift File을 지우면 Build Fail났음  ( RN에서는 ) 

 [Existing target has no ‘swift compiler code generation’ section](https://stackoverflow.com/a/36790165/12330603) 


**참고:** 
 [Importing Objective-C into Swift](https://developer.apple.com/documentation/swift/imported_c_and_objective-c_apis/importing_objective-c_into_swift) 
