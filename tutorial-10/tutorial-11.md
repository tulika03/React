## Tutorial 11

## Higher order components (HOCs)
It takes a component as an input, enhances or modifies it and returns a new component that wraps the original one.
- HOCs allow you to add additional functionality to a component without modifying the component's code.
- Ex. So input will be restaurant card and output will be restaurant card with promoted label

**Structure**
- const hoc = (WrappedComponent) => {
    //
    return () => {
        return (
            <extra code>
            <WrappedComponent>
        )
    }
}

## Controlled and uncontrolled components
An important part for react is to manage it's data.
All react applications have 2 layers
1. UI layer
2. Data layer
UI layer is powered by data layer.

1. When the component is controlled by the parent component it is called a `controlled component`.
2. When the component has it's own state is called `uncontrolled component`.


## Use context or props drilling
When the application is huge, managing components is challenge. The data flow in react is in one direction parent => children ==> so on.
ResMenu => itemCategory => itemList
- I can't directly pass data from ResMenu to itemList. Have to pass it via intermediate parent.
- What to do if i have to pass data from great great grandfather to children I cannot do it directly. 
- This is called `props drilling`
Context is a global place where data is kept and can be accessed to solve prop drilling issue.
ex: loggedIn user detail or theme.
- React gives us a hook to use the created context called useContext
But useContext cannot be used in hooks