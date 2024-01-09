### 1
npm start = npm run start

React element is an object. The root.render() takes the react element and converts it into object.

### JSX
- SX is a syntax extension for JavaScript that allows HTML-like elements to be mixed with JavaScript code. 
- Javascript syntax which is easier to create react element, though JSX is not a part of react.
- JSX is a convention where we merge html and javascript.
- JSX is html like syntax

- The code in JSX is transpiled(converted to code that browser can understand) before it reaches js engine.
- The transpiling is done by parcel
    - Parcel gives the responsibility of transpiling the code to package called babel.

## Babel
Babel is a js compiler, that converts (transpiles) the code that react can understand.

JSX ==>(by babel) React.createElement() - Js Object ==> HTML Element

- Coverts JSX to js code
- Transpiles code to a code that older browser understand like es6 code.
- JSX uses camel case for attributes

USe () for multiline JSX for the React to know where it starts and ends

Babel is a js transpiler that converts edge js(ES6) into plain old js that can run in any browser


### React component
There are 2 types of components in react 
1. Class based component - Old way of writing code - It used hs classes to create component
2. Functional components - new way of writing code- It uses functions for functional component

### React functional component
A normal js function which returns some piece of JSX is a functional component

### What is component composition
- Component inside a component


### React concepts
- If we write {} inside JSX we can run any piece of js expression
- We can inject any javascript code inside {} in JSX

We can use react element inside react element
We can use react component inside react element
and vice versa

JSX takes care of injection attack, JSX escapes malicious attack
JSX sanitizes data and prevents CROSS site scripting attack

