import React from 'react';
import ProfileImage from '../img/mee.jpg';
import '../styles.scss';

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input placeholder='find a user' type='text'/>
      </div>

      <div className="userChat">
        <img src={ProfileImage} alt=''/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search;