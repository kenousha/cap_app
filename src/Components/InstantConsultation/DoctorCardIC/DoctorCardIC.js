import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './DoctorCardIC.css';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC'
import { v4 as uuidv4 } from 'uuid';
import svg from './/images/0.svg'; import svg1 from './/images/1.svg'; import svg2 from './/images/2.svg';
import svg3 from './/images/3.svg'; import svg4 from './/images/4.svg'; import svg5 from './/images/5.svg';
import svg6 from './/images/6.svg'; import svg7 from './/images/7.svg'; import svg8 from './/images/8.svg';

const DoctorCardIC = ({ name, speciality, experience, ratings, profilePic }) => {
  const [showModal, setShowModal] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const handleBooking = () => {
    setShowModal(true);
  };

  const handleCancel = (appointmentId) => {
    localStorage.removeItem('appointmentData');
    const updatedAppointments = appointments.filter((appointment) => appointment.id !== appointmentId);
    setAppointments(updatedAppointments);
  };

  const handleFormSubmit = (appointmentICData) => {
    const newAppointment = {
      id: uuidv4(),
      ...appointmentICData,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setShowModal(false);
  };
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
            return svg;
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
        {/* for reference  */}
        {/* <div>
              <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
              <div>No Booking Fee</div>
            </button>
              </div> */}
      </div>


      <div className="doctor-card-options-container">
       <Popup
          style={{ backgroundColor: '#FFFFFF'}}
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
            <div className="doctorbgIC" style={{ height: '93vh', width: '50vh', overflow: 'auto' }}>
              <div style={{height: '18%', width: '100%'}}>
                <div className="doctor-card-profile-image-container">
                <img src={getDoctorImage(name)} alt="" style={{ height: '150px', width: '150px', margin:"0px"}}/>
                </div>
                <div className="doctor-card-details" >
                  <div className="doctor-card-detail-profile">{profilePic}</div>   
                  <div className="doctor-card-detail-name">{name}</div>
                  <div className="doctor-card-detail-speciality">{speciality}</div>
                  <div className="doctor-card-detail-experience">{experience} years experience</div>
                  <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
                </div>
              </div>

              {appointments.length > 0 ? (
                <>
                  <h3 style={{ textAlign: 'center' , marginTop: '150px'}}>Appointment Booked!</h3>
                  {appointments.map((appointment) => (
                    <div className="bookedInfoIC" key={appointment.id} style={{height: '20%', width: '100%'}}>
                      <p>Name: {appointment.name}</p>
                      <p>Phone Number: {appointment.phone}</p>
                      <button onClick={() => handleCancel(appointment.id)}>Cancel Appointment</button>
                    </div>
                  ))}
                </>
              ) : (
                <AppointmentFormIC doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} onClick={() => handleBooking(appointments.id)}/>
              )}
            </div>
          )}
        </Popup> 
      </div>
    </div>
  );
};

export default DoctorCardIC;
