# Device Locale Id 알아내기
#TIL/dev/react-native

```typescript

import { NativeModules } from 'react-native' // iOS: 
const locale = NativeModules.SettingsManager.settings.AppleLocale // "fr_FR" // Android: 
const locale = NativeModules.I18nManager.localeIdentifier // "fr_FR"
```

 [What’s the best way to get device locale in react native (iOS)?](https://stackoverflow.com/questions/33468746/whats-the-best-way-to-get-device-locale-in-react-native-ios) 
