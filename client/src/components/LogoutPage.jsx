// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { useCookies } from "react-cookie";
import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";

// export default function Cards() {
//   const navigate = useNavigate();
//   const [cookies, setCookie, removeCookie] = useCookies([]);
//   useEffect(() => {
//     const verifyUser = async () => {
//       if (!cookies.jwt) {
//         navigate("/");
//       } else {
//         const { data } = await axios.post(
//           "http://localhost:3002",
//           {},
          
//         );
//         if (!data.status) {
//           removeCookie("jwt");
//           navigate("/Login");
//         } else
//           toast(`Hi ${data.user} 🦄`, {
//             theme: "dark",
//           });
//       }
//     };
//     verifyUser();
//   }, [cookies, navigate, removeCookie]);

//   const logOut = () => {
//     removeCookie("jwt");
//     navigate("/Login");
//   };
//   return (
//     <>
//       <div className="private">
//         <h1>Super Secret Page</h1>
//         <button onClick={logOut}>Log out</button>
//       </div>
//       <ToastContainer />
//     </>
//   );
// }
import React from 'react'

const LogoutPage = () => {
  const navigate = useNavigate();


  async function submit(e){
    e.preventDefault();
         localStorage.removeItem("token")

         navigate("/")
    }
   
  return (
    
       <div className="logout-container">
      <div className="logout-content">
        <h2>Logout</h2>
        <p>Are you sure you want to log out?</p>
        <button className="logout-button"  onClick={submit}>Logout</button>
      </div>
    </div>
    
  )
}

export default LogoutPage

