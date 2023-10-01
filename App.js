 // const heading = React.createElement("h1",{}, "Hello World from React!")
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);
        
       //  const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"Hello World from React App.js File!");
        
       import React from "react"
       import ReactDOM from "react-dom"

       const parent = React.createElement("div",{id:"parent"},
       [React.createElement("div",{id:"child1"},[
              React.createElement("h1",{},"this is kpv of India"),
              React.createElement("h2",{},"this is h2"),
       ]),React.createElement("div",{id:"child2"},[
              React.createElement("h1",{},"this is h1"),
              React.createElement("h2",{},"By Rajeev Kumar"),
       ])]
       )

       console.log(parent)
        const root = ReactDOM.createRoot(document.getElementById("root"));
        
        root.render(parent);