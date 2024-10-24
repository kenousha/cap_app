import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { v4 as uuidv4 } from 'uuid';
import './Reports.css'

const Reports = () => {
    const [showModal, setShowModal] = useState(false);
    const [reviewedDoctor, setReviewedDoctor] = useState([]);
    const [reports, setreports] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    
    useEffect(() => {
    const storedReviewData = ('reviewData');
    if (storedReviewData) {
        setReviewData(storedReviewData);
      }
    }, [reviewData]); 
    
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
      const updatedreports = [...reports, newReview];
      setreports(updatedreports);
      setShowModal(false);
    };

        const doctors = [
            { number: 1, name: 'Dr. John Doe', speciality: 'Cardiology', feedback: 'Yes', review: '' },
            { number: 2, name: 'Dr. Emily Johnson', speciality: 'Neurology', feedback: 'Yes', review: '' },
            { number: 3, name: 'Dr. Michael Brown', speciality: 'Pediatrics', feedback: 'Yes', review: '' },
            { number: 4, name: 'Dr. Sarah Davis', speciality: 'Oncology', feedback: 'No', review: '' },
        ];

return (
 <div className="container" style={{overflow:'hidden'}}>
  <div className="reports-container">
        <div> <h1 style={{textAlign:'left'}}>Reports</h1></div>
    <table cellSpacing="0" cellPadding="10">       
     <thead style={{textAlign:'center'}}>
        <tr>
         <th>Serial Number</th>
         <th>Doctor Name</th>
         <th>Doctor Speciality</th>
         <th>Provide Feedback</th>
         <th>Review Given</th>
        </tr>
     </thead>               
     <tbody> 
      {doctors.map((doctor) => (
        <tr key={doctor.number}>           
         <td>{doctor.number}</td>
         <td> {doctor.name} </td>
         <td>{doctor.speciality}</td>
         <td>
          <button className='review-btn' onClick={() => handleReview(doctor)}>
            <div>View Report</div>
          </button>

         </td>
         <td>
          <button className='review-btn' onClick={() => handleReview(doctor)}>
            <div>Download Report</div>
          </button>

         </td>
        </tr>
      ))}
     </tbody>
    </table>
    <Popup open={showModal} modal onClose={() => setShowModal(false)}>
     {(close) => (
        <div> {reports.some(review => review.reviewedID === doctors.number) ? (
     <>
     <h3 style={{ textAlign: 'center'}}>Review Submited!</h3>
     {reports.map((review) => (
     <div key={review.id} style={{display:'none'}}/>
     ))}
     </>
     ) : (
<></>     )}
     </div> 
     )}
     </Popup>
  </div>
 </div>
 );
};
export default Reports;