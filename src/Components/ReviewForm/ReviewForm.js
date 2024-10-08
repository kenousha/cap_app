import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import './ReviewForm.css';
import Feedback from './Feedback/Feedback'

function ReviewForm() {
    const [showModal, setShowModal] = useState(false);
    const [reviews, setReviews] = useState([]);
  
    const handleReview = () => {
      setShowModal(true);
    };
  
    const handleFormSubmit = async (reviewData) => {
      const newReviews = {
        id: uuidv4(),
        ...reviewData,
      };
      const updatedreviews = [...reviews, newReviews];
      setReviews(updatedreviews);
      setShowModal(false);
    }  

        const doctors = [
            { number: 1, name: 'Dr. John Doe', speciality: 'Cardiology', feedback: 'Yes', review: '' },
            { number: 2, name: 'Dr. Jane Smith', speciality: 'Dermatology', feedback: 'No', review: '' },
            { number: 3, name: 'Dr. Emily Johnson', speciality: 'Neurology', feedback: 'Yes', review: '' },
            { number: 4, name: 'Dr. Michael Brown', speciality: 'Pediatrics', feedback: 'Yes', review: '' },
            { number: 5, name: 'Dr. Sarah Davis', speciality: 'Oncology', feedback: 'No', review: '' },
        ];

    return (
        <div className="container">
        
        <div className="reviews-container">
        <div> <h1 style={{textAlign:'left'}}>Reviews</h1></div>
        
        <div>
        <table cellspacing="0" cellpadding="10">
        
        <thead>
            <th>Serial Number</th>
            <th>Doctor Name</th>
            <th>Doctor Speciality</th>
            <th>Provide Feedback</th>
            <th>Review Given</th>
        </thead>
                        
        <tbody> {doctors.map((doctor) => (
        <tr key={doctor.number}>           
            <td>{doctor.number}</td>
            <td style={{textAlign:'left'}}> {doctor.name} </td>
            <td>{doctor.speciality}</td>
            <td> <Popup modal open={showModal} onClose={() => setShowModal(false)} 
             trigger={ <button className={`give-review-btn ${reviews.length > 0 ? 'review-given-review' : ''}`}>
             {reviews.length > 0 ? (
               <div>Review Given</div>
             ) : (
               <div>Give Review</div>
             )}
           </button> }>
            
            {(close) => (
            <div> {reviews.length > 0 ? 
            (<>
            <h3 style={{ textAlign: 'center'}}>Review Submited!</h3>
            {reviews.map((review) => (
            <div className="reviewInfo" key={review.id} >
            <p>Thank you for your feedback {review.name}</p>
            </div>))}
            </>)
         : 
            (<Feedback onSubmit={handleFormSubmit} onClick={() => handleReview(reviews.id)}/> )}
            </div> )}
            </Popup> 
            </td>

            <td>
            {reviews.map((review) => (
            <div className="reviewInfo"  >
            <p>Thank you for your feedback {review.name}</p>
            </div>))}
            </td>
            
            </tr>
        ))}</tbody>
     </table>
    </div>
 </div> 
</div>
)}

export default ReviewForm