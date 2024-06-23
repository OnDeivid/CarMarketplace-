import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';
import { GET } from './requester';

import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import LikedCars from './components/likedCars/LikedCars';
import useSessionStorage from './hooks/useSessionStorage'
import Logout from './components/logout/Logout';
import Create from './components/create/Create';
import PrivateRoute from './privateRoute/PrivateRouter';
import PublicRoute from './publicRoute/PublicRoute';

function App() {
  // const [showFilter, setShowFilter] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  // const onShowFilter = () => setShowFilter(!showFilter);
  // const onShowLiked = () => setShowLiked(!showLiked);
  const [auth, setAuth] = useSessionStorage('auth', '');

  const ProvidedData = {
    auth, setAuth,
    // showFilter,
    // onShowFilter,
    // showLiked,
    // onShowLiked
  };

  function onLogout() {
    setAuth('')
    GET('logout')
    sessionStorage.removeItem('auth')
  }
  console.log('app')

  return (
    <div style={{ marginTop: '50px', height: '100vh', width: '100vw', backgroundColor: 'rgb(206, 202, 202)' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path='/create' element={<PrivateRoute><Create /></PrivateRoute>} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
            <Route path='/' element={<Home />} />
          </Routes>
          {/* {showLiked && <LikedCars />} */}
        </Router>
      </authContext.Provider>
    </div >
  );
}

export default App
