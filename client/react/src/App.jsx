import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';

import { GET } from './requester';

import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import useSessionStorage from './hooks/useSessionStorage'
import Logout from './components/logout/Logout';
import Create from './components/create/Create';
import PrivateRoute from './privateRoute/PrivateRouter';
import PublicRoute from './publicRoute/PublicRoute';

function App() {
  console.log('APP')
  const [auth, setAuth] = useSessionStorage('auth', '');

  const ProvidedData = {
    auth, setAuth,
  };

  function onLogout() {

    setAuth('')
    GET('/users/logout')
    sessionStorage.removeItem('auth')

  }

  return (
    <div style={{ marginTop: '50px', height: '100vh', width: '100vw', backgroundColor: '#f1f0f0' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path='/create' element={<PrivateRoute><Create userData={auth} /></PrivateRoute>} />
            <Route path='/logout' element={<Logout onLogout={onLogout} />} />
            <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
            <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </authContext.Provider>
    </div >
  );
}

export default App
