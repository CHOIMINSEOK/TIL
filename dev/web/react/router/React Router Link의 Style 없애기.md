# React Router Link의 Style 없애기
#TIL/dev/web/react/router

### Text Decoration을 없앤다. 
-> `textDecoration` 을 none으로 설정한다! 

```css
<Link to={ [category.to](http://category.to/) } style={{ textDecoration: “none” }}>
```


이거 외에도 뷰자체에 적용되는 style이 있는 것 같은데, 이건 방법을 아직 찾지 못했다. 필요할때 다시 찾아보면 될듯. 