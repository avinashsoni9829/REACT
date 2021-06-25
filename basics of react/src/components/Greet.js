import React from 'react';

function Greet(props)
{

      return (
            <div>
           
           <h1>Hello , {props.name} !</h1>

           <h2> Your Age is {props.age}</h2>
           
           {props.children}

            </div>
 
      )
};

//using  arrow function   :   const Greet = () => <h1> hello user! </h1>

export default Greet;


