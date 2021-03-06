import React from 'react'
import { Link , NavLink,withRouter } from 'react-router-dom'
//withROuter is used to supercharge a component


//use ALT+SHIFT+DOWN to make a copy

// we have changed the anchor tag to link tag so the react router can act as  middle-man between the app.js and the server  and doesnt allow
// unecessary request to go to the server 

// also this removes the refereshing of the pages when we click the home,about,contact buttons


const Navbar =(props) =>
{
   // console.log(props)   //works after using withRouter (supercharging it)
    setTimeout(() => {
       props.history.push('/about') 
    }, 2000)
    
    return(
       <nav className="nav-wrapper red darken-3">
       <div className="container">
       <a  className="brand-logo">Poke'Times</a>
      <ul className="right">
      
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/About">About</Link></li>
      <li> <Link to="/Contact">Contact</Link></li>
      
      </ul>
       </div>
       </nav>
    )
}

export default withRouter(Navbar)
