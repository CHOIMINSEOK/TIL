# The useEffect Hook
#TIL/dev/web/react/Hooks

> The key to writing bug-free software is to maxmize the predictability of your program. One strategy to do that is to minimize and encapsulate the side effects in your program. In English, a side effect is defined as “a secondary,  typically undesirable effect.” Related, in programming a side effect is a state change that can be observed outside of its local environment. Said differently, a side effect is anything that interacts with the outside world ( in our case, “outside” meaning outside of the local function that’s being executed). Mutating non-local variables, making network requests, and updating the DOM are all examples of common side effects.   


```javascript
React.useEffect(() => { 
// Will be invoked on the initial render // and all subsequent re-renders. 
}) 

React.useEffect(() => { 
// Will be invoked on the initial render // and when “id” or “authed” changes. 
}, [id, authed]) 

React.useEffect(() => { 
// Will only be invoked on the initial render }
, []
)
```


**useEffect vs Lifecycle Events**
> You may have noticed that up until this point, I’ve been deliberate about not making comparisons between useEffect and the traditional component lifecycle methods (componentDidMount, componentDidUpdate, componentWillUnmount). There are a few reasons for that. First, it creates an unnecessary pre-requisite for someone new to React. As we’ve seen, you don’t need to know anything about the traditional lifecycle methods to understand useEffect. Second, they’re two fundamentally different mental models. By comparing them upfront you send a signal, often unintentionally, that useEffect is just a new way of adding lifecycle events to our function components. As you’ve seen by now, this couldn’t be further from the truth.  

