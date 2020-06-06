import React from 'react';

function Joke(props)
{
    return(
        <div className="jokes">
         
         <img src={props.jk.imgUrl} />
         <h3> {props.jk.question} </h3>
         <p>  {props.jk.punch} </p>
              
      
         </div>
    )
}

export  default Joke;
