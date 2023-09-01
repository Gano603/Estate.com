import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import './styles/Signup.scss'
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { BiErrorAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Signin() {

  const nav = useNavigate();

  const [email , setemail] = useState("");
  const [password , setpassword] = useState("");
  const [cpassword , setcpassword] = useState("");
  const [name , setname] = useState("");
  const [contact , setcontact] = useState("");
  const [register , setregister] = useState(false);

  const submitHandler = () =>{
    if(password !== cpassword){
      console.log("Not Match")
      toast(<span className='toast-notification'>
      <BiErrorAlt /> Passwords do not Match
    </span>,{
      duration:4000,
      position:'top-right',
    })
  }
  else nav('/')
    }

  return (
    <div className="login-container">
      <Toaster />
  <div className="login-icon">
    <FontAwesomeIcon icon={faUser} size="3x" />
  </div>
  <div className="login-content">
    <h1 className="login-title">Join <span className='red'>Estate</span>.com</h1>
    <p className="login-subtitle">Invest in Future</p>
    <form className="login-form">
    {register && <input
        className="login-input"
        placeholder="Enter Name"
        value={name}
        onChange={(e)=>setname(e.target.value)}
        type="text"
        required
      />}
      <input
        className="login-input"
        placeholder="Enter Email"
        value={email}
        onChange={(e)=>setemail(e.target.value)}
        type="text"
        required
      />
      {register && <input
        className="login-input"
        placeholder="0333-1234567"
        value={contact}
        onChange={(e)=>setcontact(e.target.value)}
        type="tel"
        pattern="^\03-\d{2}-\d{7}$"
        required
      />}
      <input
        className="login-input"
        placeholder="Enter your Password"
        type="password"
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        required
      />
      {register && <input
        className="login-input"
        placeholder="Confirm Password"
        value={cpassword}
        onChange={(e)=>setcpassword(e.target.value)}
        type="password"
        required
      />}

      <p className='login-to-register'>Not registered? <span onClick={()=>setregister(!register)}>Register</span> now</p>

    </form>
      <button className="login-button" onClick={submitHandler}>{register? "Register":"Login"}</button>
  </div>
</div>
  )
}