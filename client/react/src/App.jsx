import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import LikedCars from './components/lovedCars/LikedCars';

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [showLiked, setShowLiked] = useState(false);
  const [activeUser, setActiveUser] = useState('guest')

  const onShowFilter = () => setShowFilter(!showFilter);
  const onShowLiked = () => setShowLiked(!showLiked);

  const ProvidedData = {
    activeUser,
    setActiveUser,
    showFilter,
    onShowFilter,
    showLiked,
    onShowLiked
  };

  return (
    <div style={{ marginTop: '50px', height: '100vh', width: '100vw', backgroundColor: 'rgb(206, 202, 202)' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='profile' Component={Profile} /> :
            <Route path='login' Component={Login} />
            <Route path='register' Component={Register} />
            <Route path='/' Component={Home} />
          </Routes>
          {showLiked && <LikedCars />}
        </Router>
      </authContext.Provider>
    </div >
  );
}

export default App
