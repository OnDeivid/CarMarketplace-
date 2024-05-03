import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';

import { authContext } from './context/authContext';

function App() {
  const [showFilter, setShowFilter] = useState(false);

  const onShowFilter = () => setShowFilter(!showFilter);
  const ProvidedData = {
    showFilter,
    onShowFilter
  };

  return (
    <div style={{ marginTop: '50px', height: '100vh', backgroundColor: 'black' }}>
      <authContext.Provider value={ProvidedData}>
        <Router>
          <Header />
          <Routes>
            <Route path='/' Component={Home} />
            {/* <Route path='Login' Component={Home} /> */}
            {/* <Route path='Profile' Component={Home} /> */}

          </Routes>
        </Router>
      </authContext.Provider>
    </div>
  );
}

export default App
