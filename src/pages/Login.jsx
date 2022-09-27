import React from 'react';
import Avatar from '../img/addAvatar.png';

export const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Vanilla Chat</span>
        <span className='title'>Login</span>
        <form>
          <input placeholder='Email' type='email'/>
          <input placeholder='Password' type='password'/>
          <button>Sign in</button>
        </form>
        <p>Don't have an account? Register</p>
      </div>
    </div>
  )
}

export default Login;