import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../../config';


const AppointmentForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [errorName, setErrorName] = useState(''); 
    const [errorPhone, setErrorPhone] = useState(''); 
    const [errorTime, setErrorTime] = useState(''); 
    const [errorDate, setErrorDate] = useState(''); 
    const [setError] = useState('');
  
    const reserve = async (e) => {
        e.preventDefault(); 
         console.log('Reserveing with:', { time, name, date, phone });

        const response = await fetch(`${API_URL}/api/auth/reserve`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                time: time,
                name: name,
                date: date,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
       
            localStorage.setItem("auth-token", json.authtoken);
            localStorage.setItem("time", time);            
            localStorage.setItem("name", name);
            localStorage.setItem("phone", phone);
            localStorage.setItem("date", date);
             
        } else {
            if (json.error) {
                for (const error of json.error) {
                    setError(error.msg); 
                }
            } else {
                setError(json.error);
            }
        }
    };

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/;

    const handleTimeChange = (e) => {
        const value = e.target.value;
        setTime(value);
    
        if (value==='') {
          setErrorTime('Select a time'); 
        } else {
          setErrorTime(''); 
        }
      };
      const handleDateChange = (e) => {
        const value = e.target.value;
        setDate(value);
    
        if (value==='') {
          setErrorDate('Select a date'); 
        } else {
          setErrorDate(''); 
        }
      };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
    
        if (value.length === 10) {
          setErrorPhone(''); 
        } else {
          setErrorPhone('Phone number must have 10 characters'); 
        }
      };

      const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        
        if (nameRegex.test(value)&& value.length >= 2) {
              setErrorName(''); 
            } else {
              setErrorName('Enter a valid name'); 
            }
      };
  
    return (
      <form method="POST" onSubmit={reserve} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} required/>
          {errorName && <div className="err" style={{ color: 'red' }}>{errorName}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} minlength="10" maxlength="10" onChange={handlePhoneChange} required/>
          {errorPhone && <div className="err" style={{ color: 'red' }}>{errorPhone}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input type="date" id="date" value={date} onChange={handleDateChange} required/>
          {errorDate && <div className="err" style={{ color: 'red' }}>{errorDate}</div>}
        </div>
        <div className="form-group">
          <label for="time">Time</label>
                <select type="time" id="time"  value={time} onChange={handleTimeChange} required>
                    <option value="" aria-describedby="Select a time slot">-Select a time slot-</option>
                    <option value="ten A-M" aria-describedby="10:00 AM">10:00AM</option>
                    <option value="twelve P-M" aria-describedby="12:00PM">12:00PM</option>
                </select>
                {errorTime && <div className="err" style={{ color: 'red' }}>{errorTime}</div>}
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
