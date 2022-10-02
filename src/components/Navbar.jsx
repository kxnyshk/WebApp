import React, { useContext } from 'react';
import { auth } from '../firebase.js';
import { signOut } from 'firebase/auth';
import ProfileImage from '../img/mee.jpg';
import { AuthContext } from '../context/AuthContext';
import '../styles.scss';

const Navbar = () => {
  const { currUser } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className='logo'>Vanilla Chat</span>
      <div className="user">
        <img src={currUser.photoURL} alt=''/>
        <span>{currUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;