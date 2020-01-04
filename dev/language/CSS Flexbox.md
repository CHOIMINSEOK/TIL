# CSS Flexbox
#TIL/dev/language/CSS

`justify-centent` : 진행 축 정렬과 간격을 제어 / container에 적용 
	- row면 x축 방향
	- column이면 y축 방향

`align-items` : 교차축 정렬 제어 / container에 적용
	- row 면 y축 방향
	- column이면 x축 방향

`align-self` : 독립적 교차축 정렬 / child 에 적용
	- row면 y축 방향
	- column이면 x축 방향

`align-content` : 여러줄 일경우 교차축 제어 / container에 적용 



각 item component에게 `flex` 값을 할당할 수 있다. `1`, `2`, `3` 를 할당할 수 있음. width, height 고정값이 할당된 컴포넌트를 제외하고는 flex값의 비율에 따라 나머지 width가 결정된다! 
	- 좀더 정확하게는 `flexGrow` 에 값을 할당하는 것인데, flex에 전달하는 첫번째 값은 flexGrow와 동일하게 취급된다! 

- - - -
근데 Component에 직접 flex값을 줘서 크기를 조절하려고 했었는데 잘 안되더라. 이것저것 삽질하다가, 이러한 레이아웃 조정은 Wrapper Component를 활용하는게 좋다는 것을 깨달았다. Layout 차원에서 입히는  Style은 왠만하면 Wrapper Component를 만들어서 처리할 것. 



** FlexBox에서 오른 정렬하고 싶은 경우
-> `flex-end` 속성을 알아보면 된다. 


[CSS flexible 레이아웃: flex item의 정렬과 간격. | article](https://naradesign.github.io/article/flex-justify-align.html)
[CSS Flex(Flexible Box) 완벽 가이드 | HEROPY](https://heropy.blog/2018/11/24/css-flexible-box/)