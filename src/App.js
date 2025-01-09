import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import Cart from './pages/cart/cart'
import Product from './pages/product/product';
import Favorites from './pages/favorites/favorites';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/sacola' element={<Cart/>}/>
        <Route path='/conta/Favoritos' element={<Favorites/>}/>
        <Route path="/produtos/:category/:cod" element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
