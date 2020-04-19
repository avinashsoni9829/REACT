import React from 'react'

const Contact =(props)=>
{

    // this settimeout function take us from contact page to about page in 2ms
    /*
    setTimeout(() => {
       props.history.push('/about') 
    },2000);

    */
    //time is in milliseconds

    return(
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>hello this is avinash soni. i am a engineering student and i am not having corona virus </p>
        
        </div>
    )
}
export default Contact
