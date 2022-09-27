import React from 'react';
import Chat from '../components/Chat.jsx';
import Sidebar from '../components/Sidebar.jsx';
import '../styles.scss';

export const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home;