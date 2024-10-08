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
    const [review, setReview] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState('');
    const [showWarning, setShowWarning] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        review: '',
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
        });
        // Check if all required fields are filled before submission
        if (formData.name && formData.review> 0) {
        setShowWarning(false);
        } else {
        setShowWarning(true);
        }
    };

    return (
        <div className="container">
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
                                <Popup modal open={showModal} onClose={() => setShowModal(false)} trigger={
                                    <button className="reviewbutton">
                                        <div>Click Here</div>
                                    </button>
                                }>
                                    {(close) => (
                                        <form className="feedbackForm" onSubmit={handleSubmit}>
                                            <h2>Give Your Feedback</h2>
                                            {/* Display warning message if not all fields are filled */}
                                            {showWarning && <p className="warning">Please fill out all fields.</p>}
                                            <div>
                                            <label >Name:</label>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                                            </div>
                                            <div>
                                            <label >Review:</label>
                                            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                                            </div>

                                            <div className='rating'>
                                                <label >Rating:</label>
                                                    <div className='starrating'>
                                                    
                                                        <input type='radio'  name='rate' id='star5'/>
                                                        <label for='star5'  className="fa fa-star star"/>

                                                        <input type='radio' name='rate' id='star4'/>                                            
                                                        <label for='star4'  className="fa fa-star star"/>

                                                        <input type='radio' name='rate' id='star3'/>
                                                        <label for='star3'  className="fa fa-star star"/>

                                                        <input type='radio' name='rate' id='star2'/>
                                                        <label for='star2'  className="fa fa-star star"/>

                                                        <input type='radio' className="fa fa-star star"name='rate' id='star1'/>
                                                        <label for='star1'  className="fa fa-star star"/>

                                                    </div>
                                            </div>
                                            {/* Submit button for form submission */}
                                            <button type="submit">Submit</button>
                                        </form>
                                    )}
                                </Popup>        
                            </td>
                                <td>
                                {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
                                </td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
                </div>
            
        </div>
    );
}

export default ReviewForm