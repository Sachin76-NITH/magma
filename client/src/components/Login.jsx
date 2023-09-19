import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {ToastContainer,toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useCookies } from "react-cookie";
import '../styles/login.scss'
import { setGlobalEmail } from '../Global/global';

function Login() { 
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('')

    const generateError=(err)=>  toast.error(err,
      {
        position:"bottom-right",
      })

    async function submit(e){
        e.preventDefault();

        try{
          const {data}=  await axios.post("http://localhost:3002/Login",{
                email,password
            })
            if(data){
              if(data.errors){
                    const {email,password}=data.errors;
                    if(email) generateError(email);
                    else if(password) generateError(password)
              }
              else{
                    localStorage.setItem('token',data.token);
                    
                    navigate("/User",{ state: { email } })
                    //save email
                    setGlobalEmail(email);
              }
            }
        }
        catch(ex){
               console.log(ex);
        }
        
    }
  return (
    
      <div className='login_body'>

        <div className='magma_tagline'>
          <h1>MAGMA CORPS</h1>
          <p>Fueling Dreams, Powering Innovation: Magma Corps - Where Tech Meets Fun, Knowledge, and Web Mastery</p>
        </div>
        <div className='login_form'>
          <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
    <small id="emailHelp"  className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}}placeholder="Password"/>
  </div>
  
  <button type="submit"  className="btn btn-primary" onClick={submit}>Login</button>
 
</form>
        </div>
      
<ToastContainer/>
    </div>
    
  )
}
export default Login;
