import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">MAGMA CORPS</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item sac">
        <li><Link to="/Home" className="k">Home</Link></li>
        </li>
        <li className="nav-item sac">
        <li><Link to="/Blog" className="k">About</Link></li>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Projects
          </a>
          <ul className="dropdown-menu">
         
          <li><Link to="/User" className="k">LMS</Link></li>
       
        <li><Link to ="/Portfolio" className="k">Portfolio</Link></li>
            {/* <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li> */}
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            User
          </a>
          <ul className="dropdown-menu">
          <li><Link to ={"/Register"} className="k">Register</Link></li>
        <li><Link to={"/Login"} className="k">Login</Link></li>
        <li><Link to ={"/Logout"} className="k">Logout</Link></li>
          </ul>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
  );
}

export default Navbar;