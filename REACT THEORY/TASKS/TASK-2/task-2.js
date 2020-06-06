/*
objective: create a function MyInfo then return
  a) h1 with your name
  b) a para graph
  c) a unorderd list of 3 vacation spot 
*/

import React from "react";
import ReactDOM from  "react-dom";

function MyInfo()
{
    return(
        <div>
        <h1>hi this is avinash </h1>
        <p> hello i am a programmer </p>
        <ul>
        <li>kashmir</li>
        <li>london</li>
        <li>mumbai</li>
        </ul>
        
        </div>
    )
}


ReactDOM.render(<MyInfo/>,document.getElementById("root"));
