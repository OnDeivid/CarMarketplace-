import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const onShowFilter = () => setShowFilter(!showFilter);
  const ProvidedData = {
    showFilter,
    onShowFilter
  };

  return (
    <div style={{ marginTop: '50px', height: '100vh',width:'100vw', backgroundColor: 'rgb(206, 202, 202)' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
            <Route path='login' Component={Login} />
            <Route path='profile' Component={Profile} />
            <Route path='register' Component={Register} />

          </Routes>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App
