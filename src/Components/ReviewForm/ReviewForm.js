import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import './ReviewForm.css';
import Feedback from './Feedback/Feedback'

const ReviewForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [reviewedDoctor, setReviewedDoctor] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [reviewData, setReviewData] = useState(null);
    
    useEffect(() => {
    const storedReviewData = JSON.parse(localStorage.getItem('reviewData'));
    if (storedReviewData) {
        setReviewData(storedReviewData);
      }
    }, []); 
    
    const handleReview = (doctor) => {
      setReviewedDoctor(doctor);
      setShowModal(true);
    };
  
    const handleFormSubmit = async (reviewData) => {
      const newReview = {
        id: uuidv4(),
        ...reviewData,
        reviewedID: reviewedDoctor.number,
      };
      const updatedReviews = [...reviews, newReview];
      setReviews(updatedReviews);
      setShowModal(false);
    };

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
                        
        <tbody> 
         {doctors.map((doctor) => (
          <tr key={doctor.number}>           
            <td>{doctor.number}</td>
            <td style={{textAlign:'left'}}> {doctor.name} </td>
            <td>{doctor.speciality}</td>
            <td>
             <button onClick={() => handleReview(doctor)}>
               {reviews.some(review => review.reviewedID === doctor.number) ? <div className='allreadySubmitted'>Review Given</div> : <div className='notSubmitted'>Give Review</div>}
             </button> 
            </td>
            <td>
             {reviews.find(review => review.reviewedID === doctor.number)?.review || ''}
            </td>
            </tr>
        ))}
        </tbody>
     </table>
     <Popup open={showModal} modal onClose={() => setShowModal(false)}>
    {(close) => (
            <div> {reviews.some(review => review.reviewedID === doctors.number) ? 
            (<>
            <h3 style={{ textAlign: 'center'}}>Review Submited!</h3>
            {reviews.map((review) => (
            <div className="reviewInfo" key={review.id} >
            <p>Thank you for your feedback {review.name}</p>
            </div>))}
            </>)
         : 
            (<Feedback doctor={reviewedDoctor} onSubmit={handleFormSubmit} onClick={() => handleReview(doctors)}/> )}
            </div> )}
            </Popup>
    </div>
 </div> 
</div>
)}

export default ReviewForm