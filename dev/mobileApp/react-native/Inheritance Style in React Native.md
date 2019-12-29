# Inheritance Style in React Native
#TIL/dev/react-native

1. React Native에서 CSS Style 상속은 매우 한정적이다. 
-> Text의 subtree에서만 한정적으로 style 상속5이 이루어지는 것 같다. 그리고 이런 방식으로의 코딩은 절대 권장되지 않는다. 
> React Native still has the concept of style inheritance, but limited to text subtrees.  

```html
<Text style={{fontWeight: ‘bold’}}> 
	I am bold <Text style={{color: ‘red’}}> and red </Text> 
</Text>
```

**Reference:**
 [Style Inheritance of React Native](https://medium.com/@fullsour/style-inheritance-of-react-native-eca1c974f02b) 

2. RN에는 Style Inheritance syntax가 존재하지 않는다. 그냥 여러 pre-defined styleSet을 반복해서 정의하는게 최선인 것 같다. 

**Reference:**
 [StyleSheet - Extend Style Value in React Native](https://stackoverflow.com/a/49972556/12330603) 
