import React, { useState } from 'react';
import Avatar from '../img/addAvatar.png';
import { useNavigate, Link } from 'react-router-dom';
import { auth, storage, db } from '../firebase.js';
import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const Register = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email       = e.target[1].value;
    const password    = e.target[2].value;
    const file        = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on((error) => {
        console.log(error);
      }, () => {
        getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
          await updateProfile(res.user, {
            displayName, photoURL:downloadURL
          });
          await setDoc(doc(db, 'users', res.user.uid), {
            uid:res.user.uid, displayName, email, photoURL:downloadURL
          });
          await setDoc(doc(db, 'userChats', res.user.uid), {});
          navigate('/');
        });
      });
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
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input placeholder='Display Name' type='text'/>
          <input placeholder='Email' type='email'/>
          <input placeholder='Password' type='password'/>
          <input style={{display:'none'}} type='file' id='file'/>
          <label htmlFor='file'>
            <img src={Avatar} alt=''/>
            Pick your Avatar
          </label>
          <button>Sign Up</button>
          {err && <span>Oops! something went wrong :(</span>}
        </form>
        <p>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register;