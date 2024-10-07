import React from 'react'

const AppointmentFormIC = ({ doctorName, doctorSpeciality, onSubmit, name, phone, date, time }) => {

   
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ doctorName, doctorSpeciality, name, phone, date, time });
      console.log('Reserving with:', {  name, phone, date, time });
      const appointmentICData = {
        "name": name,
        "phone": phone,
        "date": date,
        "time": time,
        "doctorName": doctorName,
        "doctorSpeciality": doctorSpeciality,
      }
      localStorage.setItem('appointmentICData', JSON.stringify(appointmentICData));
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-formIC">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => (name= e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => (phone= e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input type="date" id="date" value={date} onChange={(e) => (date= e.target.value)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
                <select type="time" id="time" value={time} onChange={(e) => (time= e.target.value)} required>
                    <option value="" aria-describedby="Select a time slot">-Select a time slot-</option>
                    <option value="10:00 AM" aria-describedby="10:00 AM">10:00AM</option>
                    <option value="12:00PM" aria-describedby="12:00PM">12:00PM</option>
                </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentFormIC
