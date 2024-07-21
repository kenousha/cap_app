import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";



const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        // setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
          }
        }, []);
  return (
    <nav>
    
  <div className="logo">
    <Link to="/">
    StayHealthy 
    <i style={{color:'#2190FF'}} className="fa fa-user-md"></i>
    <span>.</span>
    </Link>
  </div>

  <ul className="menu">
    <li className="item"> <Link to="/LandingPage" > Home </Link> </li>
    <li className="item"> <Link to="/Appointments"> Appointments </Link></li>
    <li className="item"> <Link to="/Health">Health Blog </Link></li>
    <li className="item"> <Link to="/LandingPage">Reviews </Link></li>
    <li className="item"> <Link to="/Sign_Up"><button class="btn2">Sign Up</button></Link></li>
    <li className="item"> <Link to="/Login"> <button className="btn1">Login</button></Link></li>
  </ul>
</nav>
  );
};

export default Navbar;