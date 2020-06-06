//props is a functional parameter that has the properties of a object

import React from 'react'

function ContactCard(props)
{
   // console.log(props);
    
    return(
        
        <div className="contact-card">
        <img src={props.contact.imgUrl}/>
        <h3>{props.contact.name}</h3>
        <p> {props.contact.phone} </p>
        <p> {props.contact.email} </p>
        </div>
        
    )
}


export default ContactCard;

