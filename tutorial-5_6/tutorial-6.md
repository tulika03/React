## Monolith and Microservice architecture

A single big project with APIs and UI code inside the same project.

## Microservice
- In microservice there are different services and these service combine together forms a big app.
- For example separate service for display, shopping, payment etc. 
- This is called separation of concern. It follows a single responsibility principle.
- These services have to interact with each other.
- All the services on different ports.


## Approach for API
1. loads => API     => Render UI
            500 ms
2. page loads ==> render UI ==> API ==> now rerender our application from API (It's a better approach)
We will use the 2nd approach

## Hook in react
Hook is normal js function, which react gives to us.

## useEffect hook
useEffect is a function takes 2 arguments:
1. `arrow function`. IT is a call back function. This callback function is called after the component is rendered.
2. value


## Why const values are getting updated using useState
It is because useState set() update the value reference and re-render again and it will find the diff between old and new version. So, the new render is a new variable. So, it is keeping a track of everything

## Shimmer UI
Load fake page until we get actual data from API.

useState is used because React doesn't know if the variable has changed for it to rerender the data. That is why useState is used.

Whenever state variable updates, React re-render the component (or goes through reconciliation cycle)

## Js statement vs expression
a JavaScript "if statement" cannot be used as an expression because it can't execute to a value – it can only create side effects. Yet, you can use the ternary operator if you want to avoid the side effects of using an if statement in JavaScript.

Any unit of code that can be evaluated to a value is an expression.

### Arithmetic Expressions:
Arithmetic expressions evaluate to a numeric value. Examples include the following
```
    10;     // Here 10 is an expression that is evaluated to the numeric value 10 by the JS interpreter
    10+13; // This is another expression that is evaluated to produce the numeric value 23
```


### String Expressions:
String expressions are expressions that evaluate to a string. Examples include the following

``` 'hello';
    'hello' + 'world'; // evaluates to the string 'hello world'
```

### Logical Expressions:
Expressions that evaluate to the boolean value true or false are considered to be logical expressions. This set of expressions often involve the usage of logical operators && (AND), ||(OR) and !(NOT). Examples include

```
    10 > 9;   // evaluates to boolean value true
    10 < 20;  // evaluates to boolean value false
    true;     //evaluates to boolean value true
    a===20 && b===30; // evaluates to true or false based on the values of a and b
```
### Primary Expressions:
Primary expressions refer to stand alone expressions such as literal values, certain keywords and variable values. Examples include the following

```
    'hello world'; // A string literal
    23;            // A numeric literal
    true;          // Boolean value true
    sum;           // Value of variable sum
    this;          // A keyword that evaluates to the current object

```
### Left-hand-side Expressions:
Also known as lvalues, left-hand-side expressions are those that can appear on the left side of an assignment expression. Examples of left-hand-side expressions include the following
```
// variables such as i and total
    i = 10;
    total = 0;
    // properties of objects
    var obj = {}; // an empty object with no properties
    obj.x = 10; // an assignment expression
    // elements of arrays
    array[0] = 20;
    array[1] = 'hello';
    // Invalid left-hand-side errors
    ++(a+1); // SyntaxError. Attempting to increment or decrement an expression that is not an lvalue will lead to errors.
    Now that we have covered the basics of expressions, let’s dive a bit deeper into expressions.
```
### Assignment Expressions:
When expressions use the = operator to assign a value to a variable, it is called an assignment expression. Examples include
```
    average = 55;
    var b = (a = 1); // here the assignment expression (a = 1) evaluates to a value that is assigned to the variable b. b = (a = 1) is another assignment expression. var is not part of the expression.
```
The = operator expects an lvalue as its left-side operand. The value of an assignment expression is the value of the right-side operand such as 55 in the above example. As a side effect, the = operator assigns the value on the right side to the value on the left side.

### Expressions with side effects:
As we just saw with assignment expressions, expressions with side effects are those that result in a change or a side effect such as setting or modifying the value of a variable through the assignment operator =, function call, incrementing or decrementing the value of a variable.

```
    sum = 20; // here sum is assigned the value of 20
    sum++; // increments the value of sum by 1
    function modify(){
    a *= 10;
    }
    var a = 10;
    modify(); // modifies the value of a to 100.
```

## Statements
A statement is an instruction to perform a specific action. Such actions include creating a variable or a function, looping through an array of elements, evaluating code based on a specific condition etc. JavaScript programs are actually a sequence of statements.

Statements in JavaScript can be classified into the following categories

Declaration Statements:
Such type of statements create variables and functions by using the var and function statements respectively. Examples include

var sum;
var average;
// In the following example, var total is the statement and total = 0 is an assignment expression
var total = 0;
// A function declaration statement 
function greet(message) {
  console.log(message);
}
Expression Statements:
Wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements. But the reverse does not hold. You cannot use a statement in the place of an expression.

var a = var b; // leads to an error cause you cannot use a statement in the place of an expression
var a = (b = 1); // since (b = 1) is an assignment expression and not a statement, this is a perfectly acceptable line of code
console.log(var a); // results in error as you can pass only expressions as a function argument
Stand alone primary expressions such as variable values can also pass off as statements depending on the context. Examples of expression statements includes the following

// In the following example, sum is an expression as it evaluates to the value held by sum but it can also pass off as a valid statement.
sum;
// An expression statement that evaluates an expression with side effects
b = 4+38;
Conditional Statements:
Conditional statements execute statements based on the value of an expression. Examples of conditional statements includes the if..else and switch statements.

// Syntax of an if statement. If the expression following the if statement evaluates to a truthy value, statement 1 is executed else statement 2 is executed.
if (expression) 
    statement 1
else 
    statement 2
Loops and Jumps :
Looping statements includes the following statements: while, do/while, for and for/in. Jump statements are used to make the JavaScript interpreter jump to a specific location within the program. Examples of jump statements includes break, continue, return and throw.

Function Expressions vs Function Declarations:
A function expression, particularly a named function expression, and a function declaration may look the same but their behavior is very different.

A function expression is part of a variable assignment expression and may or may not contain a name. Since this type of function appears after the assignment operator =, it is evaluated as an expression. Function expressions are typically used to assign a function to a variable. Function expressions are evaluated only when the interpreter reaches the line of code where function expressions are located.

// A function expression. We assign a function to the variable num and use it to call the function.
var num = function message(x) {
            return x + x;
          }
num(7); // returns 14
// An anonymous function expression. Behaves exactly like a named function expression.
var num = function (x) {
            return x + x;
          }
num(7); // returns 14
Only function expressions can be immediately invoked. Such types of function expressions are referred to as Immediately Invoked Function Expression (IIFE).

// An Immediately Invoked Function Expression
(function () {
    console.log('Immediately Invoked Function Expression.');
})();
On the other hand, function declarations are statements as they perform the action of creating a variable whose value is that of the function. Function declaration falls under the category of declaration statements. Also, function declarations are hoisted to the top of the code unlike function expressions. Function declarations must always be named and cannot be anonymous.

// Example of a function declaration. Function declarations always start with the function keyword.
function greet(message) {
  return "Hi " + message;
}
For a more in-depth read on statements vs expressions, please refer to the sources listed under references.
