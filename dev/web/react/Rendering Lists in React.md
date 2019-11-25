# Rendering Lists in React
#TIL/dev/react

React는 자신의 API를 최소한도로 유지하려고 노력한다. 자연스럽게 List에 대한 렌더링도 Javascript 내장 기능을 사용하도록 하였는데, `map`을 활용하면 된다! 

```javascript
const tweets = [
	{id:1, stars: 14, text: ‘’},
	{id:2, stars: 11, text: ‘’},
]

const stars = tweets.map((tweet) => tweet.stars)

//jsx. 성능최적화를 위해 map으로 생성되는 여러 리스트에 unique한 id값을 전달해주도록 하자. 
<ul id=“tweets”>
	{tweets.map((tweet) => (
		<li key={tweet.id}>
			{tweet.text}
		</li>
	))}
</ul>


```