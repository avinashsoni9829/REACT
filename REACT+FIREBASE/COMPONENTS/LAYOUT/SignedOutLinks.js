//this component is  not going to have a state thats why it can be fucntional component instead of a class component 
import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedOutlinks = () =>
{
    return (
        <ul className="right">
        <li> <NavLink to='/'>Signup</NavLink></li>
        <li> <NavLink to='/'>Login</NavLink></li>
        
        
        </ul>
        
    )
}


export default SignedOutlinks