import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import LandingPage from './Components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/InstantConsultation" element={<InstantConsultation/>}/>
                <Route path="/LandingPage" element={<LandingPage/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Sign_Up" element={<Sign_Up/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
