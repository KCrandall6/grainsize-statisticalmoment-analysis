import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.jsx';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import About from './pages/About/About.jsx';
import NavBarMenu from './pages/NavBarMenu.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBarMenu/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/> 
      </Routes>
  </BrowserRouter>
  );
}

export default App;
