import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Create from './pages/Create';
import Archive from './pages/Archive';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='app-container'>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/notes/:id' element={<Detail />} />
          <Route path='/notes/new' element={<Create />} />
          <Route path='/archives' element={<Archive />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
