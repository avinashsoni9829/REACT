import React from 'react'
//use ALT+SHIFT+DOWN to make a copy
const Navbar =() =>
{
    return(
       <nav className="nav-wrapper red darken-3">
       <div className="container">
       <a  className="brand-logo">Poke'Times</a>
      <ul className="right">
      
      <li> <a href="/">Home</a></li>
      <li> <a href="/About">About</a></li>
      <li> <a href="/Contact">Contact</a></li>
      
      </ul>
       </div>
       </nav>
    )
}

export default Navbar
