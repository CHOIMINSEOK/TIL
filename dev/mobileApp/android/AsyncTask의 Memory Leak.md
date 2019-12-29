# AsyncTask의 Memory Leak
#TIL/dev/native/Android

1. Non-static inner class는 container class의 reference를 잡고있다. AsyncTask는 Container Activity class보다 더 오래 살아있을 수도 있는데, 그로 인해 activity가 정상적으로 garbage collecting되는 것을 방해하며, 따라서 memory leak이 발생한다.

2. 안드로이드의 경우 한번 할당한 memory는 왠만해서는 해제하지않는다. GC를 돌리는 오버헤드가 굉장히 커서, 정말 말도안될정도로 앱이 메모리를 잡고있지않는 경우를 제외하고는 GC가 안돌아간다고 봐도됨. 고로 별 신경을 안써도 될 법한 이슈인듯. ㅎㅎ


 [Warning: This AsyncTask class should be static or leaks might occur](https://stackoverflow.com/questions/44309241/warning-this-asynctask-class-should-be-static-or-leaks-might-occur) 
