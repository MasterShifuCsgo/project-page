import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router';
import Home from './pages/home/Home';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>        
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/aboutme" element={<AboutMe></AboutMe>}></Route>          
        </Routes>      
      </BrowserRouter>  
    </>
  )
}

export default App
