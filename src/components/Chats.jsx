import React from 'react';
import ProfileImage from '../img/mee.jpg';
import '../styles.scss';

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={ProfileImage} alt=''/>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello!</p>
        </div>
      </div>
    </div>
  )
}

export default Chats;