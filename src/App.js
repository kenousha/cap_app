import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import LandingPage from './Components/LandingPage/LandingPage';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

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
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/FindDoctorSearch" element={<FindDoctorSearch/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
