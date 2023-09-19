import React from 'react'
import "../styles/footer.scss"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    
    <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li   className="nav-item"><Link className="ss" to ={"/Home"}>Home</Link></li>
      {/* <li   className="nav-item"><a href="#"  className="nav-link px-2 text-muted">Features</a></li> */}
      <li   className="nav-item"><Link className="ss" to={"/User"}>LMS</Link></li>
      {/* <li   className="nav-item"><a href="#"  className="nav-link px-2 text-muted">FAQs</a></li> */}
      <li   className="nav-item"><Link className="ss"to ={"/Blog"}>About</Link></li>
    </ul>
    <p  className="ss text-center text-muted">© 2023 Company, Inc</p>
  </footer>
    
  )
}

export default Footer