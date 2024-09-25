import React from 'react';
import './DoctorCard.css';
import svg from './svg.svg'
import svg1 from './Dr. Jiao Yang.svg'
import svg2 from './Dr. Denis Raj.svg'
import svg3 from './Dr. Lyn Christie.svg'
import svg4 from './Dr. Elizabeth Clark.svg'
import svg5 from './Dr. Jessica White.svg'
import svg6 from './Dr. Alan Dalkin.svg'
import svg7 from './Dr. Richard Pearson,.svg'
import svg8 from './Dr. Eugene J. Turner.svg'


const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {

    const getDoctorImage = (name) => {
        switch (name) {
          case 'Dr. Jiao Yang':
            return svg1;
          case 'Dr. Denis Raj':
            return svg2;
          case 'Dr. Lyn Christie':
            return svg3;
          case 'Dr. Rachel Parker':
            return svg3;
          case 'Dr. Elizabeth Clark':
            return svg4;
          case 'Dr. Laura Taylor':
            return svg4;
          case 'Dr. Jessica White':
            return svg5;
          case 'Dr. Emily Clark':
            return svg5;
          case 'Dr. Alan Dalkin':
            return svg6;
          case 'Dr. Richard Pearson,':
            return svg7;
          case 'Dr. Eugene J. Turner':
            return svg8;
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
            <div>
              <button className='book-appointment-btn'>                    
                <div>Book Appointment</div>
                <div>No Booking Fee</div>
              </button>
            </div>
      </div>
    </div>
  );
};

export default DoctorCard;
