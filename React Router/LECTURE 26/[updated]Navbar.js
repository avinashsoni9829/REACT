import React from 'react'
import { link , Navlink } from 'react-router-dom'
//use ALT+SHIFT+DOWN to make a copy

// we have changed the anchor tag to link tag so the react router can act as  middle-man between the app.js and the server  and doesnt allow
// unecessary request to go to the server 

// also this removes the refereshing of the pages when we click the home,about,contact buttons

const Navbar =() =>
{
    return(
       <nav className="nav-wrapper red darken-3">
       <div className="container">
       <a  className="brand-logo">Poke'Times</a>
      <ul className="right">
      
      <li> <link to="/">Home</link></li>
      <li> <link to="/About">About</link></li>
      <li> <link to="/Contact">Contact</link></li>
      
      </ul>
       </div>
       </nav>
    )
}

export default Navbar
