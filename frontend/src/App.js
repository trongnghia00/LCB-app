import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline  } from "@mui/material";

import Home from './Components/Home';
import Login from './Components/Login';
import Listings from './Components/Listings';
import Header from './Components/Header';
import Register from './Components/Register';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/listings' element={<Listings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
