import React from 'react';
import ProfileImage from '../img/mee.jpg';
import '../styles.scss';

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={ProfileImage} alt=''/>
        <span id='time'>just now</span>
      </div>
      <div className="messageContent">
        <p>hello!</p>
        <img src={ProfileImage} alt=''/>
      </div>
    </div>
  )
}

export default Message;