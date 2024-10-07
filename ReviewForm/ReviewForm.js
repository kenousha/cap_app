import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import './ReviewForm.css';

function ReviewForm() {

        const doctors = [
            { number: 1, name: 'Dr. John Doe', speciality: 'Cardiology', feedback: 'Yes', review: 'Excellent care' },
            { number: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', feedback: 'No', review: 'N/A' },
            { number: 3, name: 'Dr. Emily Johnson', speciality: 'Neurology', feedback: 'Yes', review: 'Very knowledgeable' },
            { number: 4, name: 'Dr. Michael Brown', speciality: 'Pediatrics', feedback: 'Yes', review: 'Great with kids' },
            { number: 5, name: 'Dr. Sarah Davis', speciality: 'Oncology', feedback: 'No', review: 'N/A' },
        ];
    
        const [showModal, setShowModal] = useState(false);
        const [selectedDoctor, setSelectedDoctor] = useState(null);
        const [reviews, setReviews] = useState([]);
        const [showForm, setShowForm] = useState(false);
        const [showWarning, setShowWarning] = useState(false);
    
        const handleReview = (doctor) => {
            setSelectedDoctor(doctor);
            setShowModal(true);
        };

    return (
        <div className="container">
            {showForm ?
                (<div className='review-form-container'>
                    <form className='review-form'>
                        <h2>Give Your Review</h2>
                        {showWarning && <p className="warning">Please fill out all fields.</p>}
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="review">Review:</label>
                            <textarea id="review" name="review" />
                        </div>
                        <br/>
                        <div>
                            <label htmlFor="review">Rating:</label>
                            <img src={process.env.PUBLIC_URL + '/images/stars.png'} className='rating-stars'/>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>)
            : (
                <div className="reviews-container">
                <div>
                    <h1>Reviews</h1>
                </div>
                <div>
                    <table cellspacing="0" cellpadding="0">
                        <thead>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide Feedback</th>
                            <th>Review Given</th>
                        </thead>
                        <tbody>
                        {doctors.map((doctor) => (
                        <tr key={doctor.number}>
                            <td>{doctor.number}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>
                                <button className="review-table_body-button" onClick={() => handleReview(doctor)}>
                                    {reviews.some(review => review.doctorId === doctor.number) ? 'Update Review' : 'Write Review'}
                                </button>
                            </td>
                            <td>{reviews.find(review => review.doctorId === doctor.number)?.review || ''}</td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
                 </div>
            )}
        </div>
    )
}

export default ReviewForm