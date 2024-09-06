import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import LandingPage from './Components/LandingPage/LandingPage';
import InstantConsultation from './components/InstantConsultation/InstantConsultation';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
                <Route path="/InstantConsultation" element={<InstantConsultation />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
