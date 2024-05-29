import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import LikedCars from './components/lovedCars/LikedCars';
import useSessionStorage from './hooks/useSessionStorage'
import Logout from './components/logout/Logout';
import Create from './components/create/Create';


function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const onShowFilter = () => setShowFilter(!showFilter);
  const onShowLiked = () => setShowLiked(!showLiked);
  const { state: auth, setSessionStorageState: setAuth } = useSessionStorage('auth', '');

  const ProvidedData = {
    auth, setAuth,
    showFilter,
    onShowFilter,
    showLiked,
    onShowLiked
  };

  function onLogout() {
    setAuth('')
    sessionStorage.removeItem('auth')
  }


  return (
    <div style={{ marginTop: '50px', height: '100vh', width: '100vw', backgroundColor: 'rgb(206, 202, 202)' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='profile' element={<Profile />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='/' element={<Home />} />
            <Route path='create' element={<Create />} />
            <Route path='logout' element={<Logout onLogout={onLogout} />} />
          </Routes>
          {showLiked && <LikedCars />}
        </Router>
      </authContext.Provider>
    </div >
  );
}

export default App
