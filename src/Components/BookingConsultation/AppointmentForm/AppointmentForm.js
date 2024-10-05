import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
   
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      onSubmit({ doctorName, doctorSpeciality, name, phone, date, time });
      console.log('Registering with:', { time, name, date, phone });
      localStorage.setItem("time", time);            
      localStorage.setItem("name", name);
      localStorage.setItem("phone", phone);
      localStorage.setItem("date", date);
      localStorage.setItem("doctorName", doctorName);
      localStorage.setItem("doctorSpeciality", doctorSpeciality);
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label for="role">Role</label>
                <select type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
                    <option value="" aria-describedby="Select a time slot">-Select a time slot-</option>
                    <option value="10:00 AM" aria-describedby="10:00 AM">10:00AM</option>
                    <option value="12:00PM" aria-describedby="12:00PM">12:00PM</option>
                </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
