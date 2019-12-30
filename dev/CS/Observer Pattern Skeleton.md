# Observer Pattern Skeleton
#TIL/dev


** 꽤 괜찮은 옵저버패턴 스켈레톤코드인 것 같다. 나중에 참고할 일이 있을 듯. 


```typescript
type NavigationMessage = {
	key: string;
	params?: object;
}

type TNavigationMessageHandler = (msg: NavigationMessage) => void;

class NavigationMessageCenter {
	private observers: TNavigationMessageHandler[];

	constructor() {
		this.observers = [];
	}

	subscribe(f: TNavigationMessageHandler): TNavigationMessageHandler {
		this.observers.push(f);
		return f;
	}

	unsubscribe(f: TNavigationMessageHandler): void {
		this.observers = this.observers.filter(subscriber => subscriber !== f);
	}

	notify(msg: NavigationMessage): void {	
		this.observers.forEach(observer => observer(msg);
	}

}

// 사용처 
navigationMessageCenter.notify({
	…
})


```