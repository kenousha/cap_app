import React, { useState } from 'react';
import './FindDoctorSearchIC.css';
import { useNavigate } from 'react-router-dom'; // Removed 'Navigate'
import search from './search.png';
import doctor from './doctor.png';

// Initial specialities list
const initSpeciality = [
    'Dentist', 
    'Gynecologist/obstetrician', 
    'General Physician', 
    'Dermatologist', 
    'Ear-nose-throat (ent) Specialist', 
    'Homeopath', 
    'Ayurveda'
];

const FindDoctorSearchIC = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpeciality); // 'setSpecialities' is removed because it's not used.
    const navigate = useNavigate();

    // Handle doctor selection
    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a doctor and Consult instantly</h1>
                <div>
                    <img className="docimg" src={doctor} alt="" style={{ height: "20rem", width: "30rem" }} />
                </div>
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="doctor-search-box">
                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        <div className="findiconimg">
                            <img className='findIcon' src={search} alt="" style={{ cursor: "pointer" }} />
                        </div>
                        {/* Displaying the search results */}
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {specialities.map(speciality => (
                                <div
                                    className="search-doctor-result-item"
                                    key={speciality}
                                    onMouseDown={() => handleDoctorSelect(speciality)}
                                >
                                    <span>
                                        <i style={{ color: '#000000', fontSize: '20px' }} className="fa fa-user-md" />
                                    </span>
                                    <span>{speciality}</span>
                                    <span>SPECIALITY</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearchIC;