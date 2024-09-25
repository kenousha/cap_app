import React, { useState } from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateAppointment, setDateAppointment] = useState('');
    const [timeSlot, setTimeSlot] = useState('');

    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, dateAppointment, timeSlot });
      setName('');
      setPhoneNumber('');
      setDateAppointment('');
      setTimeSlot('');
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="dateAppointment">Date of Appointment:</label>
          <input type="date" id="dateAppointment" value={dateAppointment} onChange={(e) => setDateAppointment(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label for="role">Role</label>
                <select type="time" id="timeSlot" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required>
                    <option value="" aria-describedby="Select a time slot">-Select a time slot-</option>
                    <option value="ten A-M" aria-describedby="10:00 AM">10:00AM</option>
                    <option value="twelve P-M" aria-describedby="12:00PM">12:00PM</option>
                </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
