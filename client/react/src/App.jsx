import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Header from './components/header/Header';
// import Home from './components/home/Home';

import { authContext } from './context/authContext';

import { GET } from './requester';

// import Login from './components/login/Login';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import useSessionStorage from './hooks/useSessionStorage'
import Logout from './components/logout/Logout';
// import Create from './components/create/Create';
import PrivateRoute from './privateRoute/PrivateRouter';
import PublicRoute from './publicRoute/PublicRoute';
// import Edit from './components/edit/Edit';
import { lazy } from 'react';

const Home = lazy(() => import('./components/home/Home'));
const LazyProfile = lazy(() => import('./components/profile/Profile'))
const Login = lazy(() => import('./components/login/Login'));
const Create = lazy(() => import('./components/create/Create'));
const Edit = lazy(() => import('./components/edit/Edit'));


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
    <authContext.Provider value={ProvidedData}>
      <Router>
        <Header />
        <Routes>
          <Route path='/profile' element={<PrivateRoute><LazyProfile userData={auth} /></PrivateRoute>} />
          <Route path='/create' element={<PrivateRoute><Create userData={auth} /></PrivateRoute>} />
          <Route path='/edit/:id' element={<PrivateRoute><Edit userData={auth} /></PrivateRoute>} />
          <Route path='/logout' element={<Logout onLogout={onLogout} />} />
          <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
          <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </authContext.Provider>
  );
}

export default App
