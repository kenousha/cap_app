import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar/>
          <LandingPage/>
            <Routes>
                
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
