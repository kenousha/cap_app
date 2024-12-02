import React, { useEffect, useCallback, useState } from 'react';
import './BookingConsultation.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';


function BookingConsultation () {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const saveDoctorDataToLocalStorage = (data) => {
        sessionStorage.setItem('doctorData', JSON.stringify(data));
      };
    
    const handleSearch = (searchText) => {

        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
            } else {
                
            const filtered = doctors.filter(
                (doctor) =>
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
                
            );
                
            setFilteredDoctors(filtered);
            setIsSearched(true);
           
        }
    };
    const navigate = useNavigate();

    const getDoctorsDetails = useCallback(async () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            if (searchParams.get('speciality')) {
                // window.reload()
                const filtered = data.filter(doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());

                setFilteredDoctors(filtered);
                
                setIsSearched(true);
                // window.reload()
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            setDoctors(data);
             // Save data to localStorage once fetched
             saveDoctorDataToLocalStorage(data);
        })
        .catch(err => console.log(err));
        }, [searchParams]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const authtoken = localStorage.getItem("auth-token");
                if (!authtoken) {
                    navigate("/Login");
                    return;
                }
                await getDoctorsDetails();
            } catch (error) {
                console.error("Failed to fetch doctor details:", error);
            }
        };

        fetchDetails();
    }, [searchParams, navigate, getDoctorsDetails]);


    return (
        <center>
            <div  className="searchpage-container">
            <FindDoctorSearch onSearch={handleSearch} />
            <div className="search-results-container">
            {isSearched ? (
                <center>
                    <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                    <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                    {filteredDoctors.length > 0 ? (
                    filteredDoctors.map(doctor => <DoctorCard className="doctorcard" {...doctor} key={doctor.name} />)
                    ) : (
                    <p>No doctors found.</p>
                    )}
                </center>
                ) : (
                ''
                )}
            </div>
        </div>
        </center>
    )
}

export default BookingConsultation