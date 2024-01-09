## Tutorial 7

## Hook

### useEffect()
- useEffect is called on every render
```
    useEffect(() => {

    }, [])
```
- If no dependency array, that means useEffect is called on every render.
- But if there is a dependency array empty, then useEffect is called on only initial render
- The default behavior of useEffect is called after every component render
- However, if array has data, then the useEffect is called only when dependency changes.


### useState()
- Never use useState() outside if the component.
- Don't use useState() inside if else, for loop or functions. Keep them on higher level, i.e component level.


## Routing

- RouterProvider will providing routing component to the app.

## Children routes

There are 2 types of routing
1. Client side page
2. Server side routing


### Conditional chaining
- Conditional chaining is the safe and concise way of performing access check for nested object properties.
- The optional chaining operator ?. takes the reference to its left and checks if it is undefined or null.
- If the reference is either of these nullish values, the checks will stop and return undefined. 
- Otherwise, the chain of access checks will continue down the happy path to the final value.

### Optional Chaining + Nullish Coalescing
- Optional chaining pairs well with nullish coalescing ?? to provide fallback values.
```
    const data = obj?.prop ?? "fallback string";
```

```
const data = obj?.prop?.func() ?? fallbackFunc();
```
- If the item to the left of ?? is nullish, the item to the right will be returned.

### It converts Object to boolean. If it was falsy (e.g., 0, null, undefined, etc.), it would be false, otherwise, true.

!object  // Inverted Boolean
!!object // Noninverted Boolean, so true Boolean representation

### What is SPA?
Single page application. IT loads only one web html and dynamically updates the contents as the user interacts with the application at a time.



