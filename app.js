import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    React.createElement(
        "div", 
        {id:"child1"}, [
            React.createElement("h1", {}, "This is Namaste React 🚀"),
            React.createElement("h2", {}, "I am H2 tag")
       ]),
    React.createElement(
        "div", 
        {id:"child2"}, [
            React.createElement("h1", {}, "I am H1 tag"),
            React.createElement("h2", {}, "I am H2 tag")
       ]),
); 

const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World from React!"
);  //Create heading object

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));  //create Root inside React for our project
root.render(parent);   //injecting heading object into the root, render method is taking the object and push into root