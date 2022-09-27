import React from 'react';
import ProfileImage from '../img/mee.jpg';
import '../styles.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Vanilla Chat</span>
      <div className="user">
        <img src={ProfileImage} alt=''/>
        <span>Kanishk</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar;