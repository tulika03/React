const heading = React.createElement("h1", {"id": "heading", style: {
    color: "red"
}}, "Hello world React!");

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));

const parent  = React.createElement("div", {id: "parent"}, 
    [
        React.createElement(
            "div", {"id": "child"}, 
            [React.createElement("h2", {"id": "head1"}, "Inside parent and child"),
            React.createElement("h3", {"id": "head2"}, "I am second heading")
            ]
        ),
        React.createElement(
            "div", {"id": "child"}, 
            [React.createElement("h2", {"id": "head1"}, "Inside parent and child"),
            React.createElement("h3", {"id": "head2"}, "I am second heading")
            ]
        )
    ]
);

root.render([heading, parent])