import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import Cart from './pages/cart/cart'
import Product from './pages/product/product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/produto/:cod" element={<Product/>}/>
      </Routes>
    </Router>
  );
}

export default App;
