import React from 'react';
import Img from '../img/img.png';
import Attach from '../img/attach.png';
import '../styles.scss';

const Input = () => {
  return (
    <div className="input">
      <input type='text' placeholder='Your message..'/>
      <div className="send">
        <img id='ImgAttach' src={Attach} alt=''/>
        <input id='file' type='file' style={{display:'none'}}/>
        <label htmlFor='file'>
          <img id='ImgImage' src={Img} alt=''/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input;