import React from 'react'
import "../styles/user.scss"; 
import vg from "../assests/lib.png"
import { UseAuth } from './UseAuth';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function User  (props)  {
    const location = useLocation();
    const { email } = location.state || {};
    const { isAuthenticated } = UseAuth();
    const navigate = useNavigate();
    if (!isAuthenticated) {
     return  navigate("/Login");
    }
    else{
  return (
  <>
    <div className='user'>
     
  <h1> MAGMA LIBRARY MANAGEMENT SYSTEM</h1>
     <b> {email && <p>Email: {email}</p>}</b>
      
        <div className='user_container'>
          <img src={vg} alt='Grpahics'/>
          <div className='right_container'>
              <p>
                Magma Library's user page is your gateway to a world of books. Add, view, and edit your personal collection effortlessly. Immerse yourself in captivating stories, connect with fellow book enthusiasts, and share your daily bookish thoughts. Your literary journey starts here, where every book is a new adventure waiting to be explored. Happy reading! 📚🌟
              </p>
              <div className="buttons-container">
                <button className="view-button" onClick={() => navigate('/view')}>View Books</button>
                <button className="add-book-button" onClick={() => navigate('/add-book')}>Add Book</button>
              </div>
          </div>
          
        </div>
    </div>
    
   </>
  )
}
}
export default User
