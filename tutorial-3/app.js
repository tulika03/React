import React from "react";
import ReactDOM from "react-dom/client";

// React element

const span = <p> React element</p>
const heading = (
  <h1 id="heading" className="head">
    {span}
    Namaste Javascript
  </h1>
);
const heading2 = <h2>Hello hello !!!</h2>;

// React Component
const Fn1 = () => (
  <h1 className="heading">Namaste react functional component fn1</h1>
);

// OR

const Fn2 = () => (
  <h1 className="heading">Namaste react functional component fn2</h1>
);

// OR
const number =10000;
const ButtonComponent = () => <button class="buttons">Move to React Header</button>
const HeadingComponent = () => {
  return (
    // example of component composition
    <div id="container">
        {
          number + 500  
        }
     type 1:  <Fn1></Fn1>
     type 2:  {<Fn1></Fn1>}
     type 3:  {Fn1()}
      <Fn2></Fn2>
      <h1>Namaste react functional component</h1>;
      <ButtonComponent/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// IT is used to render react element
root.render([heading, heading2, <HeadingComponent />]);
