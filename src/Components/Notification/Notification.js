// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, and appointment data
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorName, setdoctorName] = useState(null);
  const [doctorSpeciality, setDoctorSpeciality] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);


  // useEffect hook to perform side effects in the component
  useEffect(() => {
    // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorName = localStorage.getItem('doctorName');
    const storedDoctorSpeciality = localStorage.getItem('doctorSpeciality');
    const storedDate = localStorage.getItem('date');
    const storedTime = localStorage.getItem('time');
    const storedPhone = localStorage.getItem('phone');
    const storedName = localStorage.getItem('name');


    // Set isLoggedIn state to true and update username if storedUsername exists
    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorName) {
      setdoctorName(storedDoctorName);
    }
    
    if (storedDoctorSpeciality) {
        setDoctorSpeciality(storedDoctorSpeciality);
      }
    
      if (storedDate) {
        setDate(storedDate);
      }
    
      if (storedTime) {
        setTime(storedTime);
      }

      if (storedPhone) {
        setPhone(storedPhone);
      }

      if (storedName) {
        setName(storedName);
      }

  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
  return (
    <div>
      {/* Render Navbar component */}
      <Navbar ></Navbar>
      {/* Render children components */}
      {children}
      {/* Display appointment details if user is logged in and appointmentData is available */}
      {isLoggedIn && doctorName && (
        <>
          <div className="appointment-card-container">
            <div className="appointment-card__content">
              {/* Display title for appointment details */}
              <p className="p app-details">
               <h3 className="appointment-card__title">Appointment Details</h3>
                <strong>Doctor:</strong> {doctorName}<br></br>
                <strong>Speciality:</strong> {doctorSpeciality}<br></br>
                <strong>Appointment Date:</strong> {date}<br></br>
                <strong>Time of Appointment:</strong> {time}<br></br>
              </p>
              <p className="p patient-details">
               <h3 className="appointment-card__title">Patient Details</h3>
                <strong>Username:</strong> {username.split('@')[0]}<br></br> 
                <strong> Patient Name:</strong> {name}<br></br>
                <strong>Phone Number:</strong> {phone}<br></br>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// Export Notification component for use in other parts of the application
export default Notification;