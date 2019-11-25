# React Hooks Re-rendering
#dev/React/Hooks

useState, useReducer에서 Component re-rendering이 일어나는 기준은 state 값( object라면 pointer)가 바뀌었는지의 유무이다. 어떤 property를 갖는 State가 내부 값이 변했다고 하더라도 re-rendering은 일어나지 않는데, 왜냐하면 reference value는 안변했기 때문이다! 



