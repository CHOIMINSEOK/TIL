# React Native Conditional Styling 
#dev/react-native

style 안에서 jsx 조건문을 걸어주면 된다! 

```typescript
<TextInput
    style={[styles.text, touched && invalid ? styles.textinvalid : styles.textvalid]}
</TextInput>

```


https://stackoverflow.com/a/45478757/12330603

- - - -

TextInput의 경우.. 걔네가 제공하는 callback으로 값을 변경해줘야 함. 우아하진 않은 듯. 

이를테면, focus에 따라 다른 style을 적용하고 싶다면 onBlur(), onFocus()에 각각 Style State를 바꿔주고, 그 State를  style props에 전달하는 방식이다. 

```typescript
onFocus() {
    this.setState({
        backgroundColor: ‘green’
    })
  },

  onBlur() {
    this.setState({
      backgroundColor: '#ededed'
    })
  },

<TextInput 
    onBlur={ () => this.onBlur() }
    onFocus={ () => this.onFocus() }
    style={{ height:60, backgroundColor: this.state.backgroundColor, color: this.state.color }}  />

```

[Focus style for TextInput in react-native - Stack Overflow](https://stackoverflow.com/questions/34087459/focus-style-for-textinput-in-react-native/34091564#34091564)
