import { db } from '../firebase.js';
import ProfileImage from '../img/mee.jpg';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import { collection, query, where, getDocs, doc, setDoc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import '../styles.scss';

const Search = () => {
  const [userName, setUserName] = useState('');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const currUser = useContext(AuthContext);

  const handleSearch = async () => {
    const q = query(
      collection(db, 'users'), 
      where('displayName', '==', userName)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    const combinedID = currUser.uid > user.uid
                        ? currUser.uid + user.uid
                        : user.uid + currUser.uid;
    try {
      const res = await getDoc(doc(db, 'chats', combinedID));
      if(!res.exists()){
        // create chat -> chat collections
        await setDoc(doc(db, 'chats', combinedID), {messages:[]});
        
        // create user chats
        await updateDoc(doc(db, 'userChats', currUser.uid), {
          [combinedID+'.userInfo']: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedID+'.date']: serverTimestamp()
        });
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedID+'.userInfo']: {
            uid: currUser.uid,
            displayName: currUser.displayName,
            photoURL: currUser.photoURL
          },
          [combinedID+'.date']: serverTimestamp()
        });
      }
    } catch (error) {
      
    }
    setUser(null);
    setUserName('');
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input 
          onKeyDown={handleKey}
          onChange={e=>setUserName(e.target.value)} 
          placeholder='find a user' 
          type='text'
          value={userName}
        />
      </div>

      {err && <span>Oops! User not found :(</span>}
      {user && <div className="userChat" onClick={handleSelect}>
        <img src={user.photoURL} alt=''/>
        <div className="userChatInfo">
          <span>{user.displayName}</span>
        </div>
      </div>}
    </div>
  )
}

export default Search;