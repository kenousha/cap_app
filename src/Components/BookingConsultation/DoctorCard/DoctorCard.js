import React, { useEffect, useState } from 'react';
import './DoctorCard.css';
import svg from './svg.svg'; import svg1 from './svg1.svg'; import svg2 from './svg2.svg';
import svg3 from './svg3.svg'; import svg4 from './svg4.svg'; import svg5 from './svg5.svg';
import svg6 from './svg6.svg'; import svg7 from './svg7.svg'; import svg8 from './svg8.svg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import { v4 as uuidv4 } from 'uuid';

const DoctorCard = ({ name, speciality, experience, ratings, profilePic, onSubmit }) => {
    const [showModal, setShowModal] = useState(false);
    const [appointments, setAppointments] = useState([]);
  
    const handleBooking = () => {
      setShowModal(true);
    };
  
    const handleCancel = (appointmentId) => {
        localStorage.removeItem("name");
        localStorage.removeItem("time");
        localStorage.removeItem("phone");
        localStorage.removeItem("date");
        localStorage.removeItem("doctorName");
        localStorage.removeItem("doctorSpeciality");

      const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
      setAppointments(updatedAppointments);
      
    };
  
    const handleFormSubmit = async (appointmentData) => {
      const newAppointment = {
        id: uuidv4(),
        ...appointmentData,
      };
      const updatedAppointments = [...appointments, newAppointment];
      setAppointments(updatedAppointments);
      setShowModal(false);
    }  
    const getDoctorImage = (name) => {
        switch (name) {
          case 'Dr. Jiao Yang': return svg1;    case 'Dr. Michael Smith': return svg1;
          case 'Dr. Denis Raj': return svg2;    case 'Dr. Mark D. Okusa': return svg2;
          case 'Dr. Lyn Christie': return svg3;     case 'Dr. Rachel Parker': return svg3;
          case 'Dr. Elizabeth Clark': return svg4;      case 'Dr. Laura Taylor': return svg4;
          case 'Dr. Jessica White': return svg5;     case 'Dr. Emily Clark': return svg5;
          case 'Dr. Alan Dalkin': return svg6;      case 'Dr. Richard Pearson,': return svg6;
          case 'Dr. Eugene J. Turner': return svg8;     case 'Dr. Kevin Miller': return svg8;
          case 'Dr. Stephny Grosh': return svg7;
          default:
            return svg;  // Default image if name is not found
        }
    };
  return (
    <div className="doctor-card-container">
      <div className="doctor-card-details-container">
        <div className="doctor-card-profile-image-container">
        <img src={getDoctorImage(name)} alt="" style={{height:"10rem", width:"10rem", margin:"0px"}}/>        
        </div>
        <div className="doctor-card-details">
          <div className="doctor-card-detail-profile">{profilePic}</div>   
          <div className="doctor-card-detail-name">{name}</div>
          <div className="doctor-card-detail-speciality">{speciality}</div>
          <div className="doctor-card-detail-experience">{experience} years experience</div>
          <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
        </div>
      </div>
      
      <div className="doctor-card-options-container">
       <Popup
          style={{ backgroundColor: '#FFFFFF' }}
          trigger={
            <button className={`book-appointment-btn ${appointments.length > 0 ? 'cancel-appointment' : ''}`}>
              {appointments.length > 0 ? (
                <div>Cancel Appointment</div>
              ) : (
                <div>Book Appointment</div>
              )}
              <div>No Booking Fee</div>
            </button>
          }
          modal
          open={showModal}
          onClose={() => setShowModal(false)}
        >
          {(close) => (
            <div className="doctorbg" style={{ height: '100vh', overflow: 'scroll' }}>
              <div>
                <div className="doctor-card-profile-image-container">
                <img src={getDoctorImage(name)} alt="" style={{height:"10rem", width:"10rem", margin:"0px"}}/>
                </div>
                <div className="doctor-card-details">
                  <div className="doctor-card-detail-profile">{profilePic}</div>   
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' }}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfo" key={appointment.id}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phoneNumber}</p>
                      <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
              )}
            </div>
          )}
        </Popup> 
      </div>
    </div>
  );
};

export default DoctorCard;
