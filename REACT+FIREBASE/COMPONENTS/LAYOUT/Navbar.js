//this component is  not going to have a state thats why it can be fucntional component instead of a class component 
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'


const Navbar = () =>
{
    return (
        <nav className ="nav-wrapper grey darken-3">
        <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        <SignedInLinks/>
        <SignedOutLinks/>

        </div>
        </nav> 

    )
}


export default Navbar