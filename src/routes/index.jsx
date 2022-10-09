import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/index';
import Detail from '../pages/Detail';
import Example from '../pages/Example';
import NotFound from '../pages/NotFound';
import Favorite from '../pages/Favorite';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id_movie" element={<Detail />} />
        <Route path="/sandbox" element={<Example />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route
          path="*"
          element={
            <NotFound>
              <div>404 Error Not Found</div>
            </NotFound>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
