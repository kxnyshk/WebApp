import { useContext } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { AuthContext } from './context/AuthContext.js';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './styles.scss';

function App() {
  const {currUser} = useContext(AuthContext);
  console.log(currUser);

  const ProtectedRoute = ({children}) => {
    if(!currUser){
      return (
        <Navigate to='/login'/>
      );
    }

    return (
      children
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route path='/home' element={<Navigate replace to='/'/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    // <Register/>
    // <Home/>
  );
}

export default App;
