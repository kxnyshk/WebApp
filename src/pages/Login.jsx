import React, { useState } from 'react';
import { auth } from '../firebase.js';
import Avatar from '../img/addAvatar.png';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email       = e.target[0].value;
    const password    = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setErr(true);
      // alert('auth error detected!');
      // console.log(error);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Vanilla Chat</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input placeholder='Email' type='email'/>
          <input placeholder='Password' type='password'/>
          <button>Sign in</button>
          {err && <span>Oops! something went wrong :(</span>}
        </form>
        <p>Don't have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login;