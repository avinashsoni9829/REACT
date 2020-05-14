//this component is  not going to have a state thats why it can be fucntional component instead of a class component 
import React from 'react'
import { NavLink } from 'react-router-dom'
const SignedInlinks = () =>
{
    return (
        <ul className="right">
        <li> <NavLink to='/'>New Project</NavLink></li>
        <li> <NavLink to='/'>Logout</NavLink></li>
        <li> <NavLink to='/' className='btn btn-floating pink lighten-1'>NN</NavLink></li>
        
        </ul>
        
    )
}


export default SignedInlinks