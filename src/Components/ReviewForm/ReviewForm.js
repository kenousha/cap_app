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
    
   // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  
  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };
  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

    return (
        <div className="container">
            {!showForm ? (
                <div className="reviews-container">
                <div>
                    <h1 style={{textAlign:'left'}}>Reviews</h1>
                </div>
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
                            <td style={{textAlign:'left'}}>{doctor.name}</td>
                            <td>{doctor.speciality}</td>
                            <td>
                                <button className="review-table_body-button" onClick={handleButtonClick}>
                                </button>
                            </td>
                            <td>.</td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
                </div>
                ):(
                    
                    <form onSubmit={handleSubmit}>
                    <h2>Give Your Feedback</h2>
                    {/* Display warning message if not all fields are filled */}
                    {showWarning && <p className="warning">Please fill out all fields.</p>}
                    <div>
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label htmlFor="review">Review:</label>
                      <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                    </div>
                    {/* Submit button for form submission */}
                    <button type="submit">Submit</button>
                  </form>
                )}
        </div>
    )
}

export default ReviewForm