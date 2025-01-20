import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import PageLoader from './components/PageLoader';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Archive from './pages/Archive';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Login from './pages/Login';
import Home from './pages/Home';
import { useAuth, useTheme } from './utils/custom-hooks';

function App() {
  const { theme } = useTheme();
  const { isAuthenticated, isFirstLoading } = useAuth();

  if (isFirstLoading) return <PageLoader />;

  return (
    <div className='app-container' data-theme={theme}>
      <Navigation />
      <main>
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path='/' element={<Home />} />
              <Route path='/notes/:id' element={<Detail />} />
              <Route path='/notes/new' element={<Create />} />
              <Route path='/archives' element={<Archive />} />
              <Route path='*' element={<NotFound />} />
            </>
          ) : (
            <>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='*' element={<Navigate to='/login' />} />
            </>
          )}
        </Routes>
      </main>
    </div>
  );
}

export default App;
