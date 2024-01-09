## React Hooks
resList right now in content.css filter is normal js variable. So, we need to convert it into state variable to change state in realtime.

React hook is a normal js function, but the function has some more feature, which rae utility functions given by react hook

### Types of react hooks: 
1. `useState()` - It is used to generate state variable in react 
    - const [resList] = useState();
    - Whenever a state variable updates, react will re-render the component
2. `userEffect()`


### Diff algorithm
React uses reconciliation algorithm(React fiber). It finds out the difference between 2 virtual dom (i.e updated and previous VDOM) and then actually update the DOM on every render cycle. This whole algorithm is called reconciliation (which came in react 16).
React fiber is the new way to find the diff (similar git diff)

### Virtual dom (VDOM)

IT is a representation of an actual DOM. 

### Incremental rendering