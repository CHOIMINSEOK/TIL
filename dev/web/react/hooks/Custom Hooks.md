# Custom Hooks
#dev/web/react/Hooks

1. Custom Hooks를 만드는 방법은 굉장히 쉽다. 그냥 function을 만들되, React에서 제공하는 것처럼 State, setState와 같은 역할을 하는 return 값들을 정의하고, 내부적으로 useState, useReducer를 사용하면 된다!
2. `useForm` hooks를 구현해보았다. 각각의 form type별로 각각 state를 관리할 수 있게 되었고 화면마다 필요한 form을 hook를 이용하여 간단하게 재사용할 수 있게 되었는데, 매우 마음에 든다. 

```typescript
import React, { useState } from 'react’;

export enum Rule {
  NONE = ‘’,
  REQUIRED = ‘.{1,}’,
  PASSWORD = ‘.{8,}’,
  EMAIL = ‘[a-zA-Z0-9\\+\\.\\_\\%\\-\\+]{1,256}’ +
    ‘\\@‘ +
    ‘[a-zA-Z0-9][a-zA-Z0-9\\-]{0,64}’ +
    ‘(‘ +
    ‘\\.’ +
    ‘[a-zA-Z0-9][a-zA-Z0-9\\-]{0,25}’ +
    ‘)+’,
  MOBILE = ‘^[0-9]{10,11}$',
  BIRTHDATE = '^[0-9]{6,}$',
}

export enum Gender {
  Female = '0',
  Male = '1',
  Others = '2',
}

function validate(rule: Rule, input: string): boolean {
  const regexp = new RegExp(rule);
  return regexp.test(input);
}

type SetFormAction = (input: string) => void;

const useForm = (
  rule: Rule,
  defaultValue: string,
): [string, boolean, SetFormAction] => {
  const [value, setValue] = useState(defaultValue);
  const [isValid, setValidation] = useState(false);

  const setChange = (input: string): void => {
    setValue(input);
    setValidation(validate(rule, input));
  };

  return [value, isValid, setChange];
};

export default useForm;
```

**Reference:**
[ReactHooks (Custom Hooks) 사용하기](https://hoony-gunputer.tistory.com/209)












