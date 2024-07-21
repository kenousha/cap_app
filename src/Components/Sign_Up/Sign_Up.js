import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const Sign_Up = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [errorRole, setErrorRole] = useState(''); 
    const [errorName, setErrorName] = useState(''); 
    const [errorPhone, setErrorPhone] = useState(''); 
    const [errorEmail, setErrorEmail] = useState(''); 
    const [errorPassword, setErrorPassword] = useState(''); 
    const navigate = useNavigate(); 

    const getEmailPrefix = (email) => {
        return email.split('@')[0];
    };
  
    const register = async (e) => {
        e.preventDefault(); 
        const emailPrefix = getEmailPrefix(email);
         console.log('Registering with:', { name, email, password, phone });

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email || emailPrefix,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
       
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("emailPrefix", emailPrefix); 
            
            navigate("/");
            window.location.reload(); 
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexAlf = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/;
    const handleRoleChange = (e) => {
        const value = e.target.value;
        setRole(value);
    
        if (value==='') {
          setErrorRole('Select a role'); 
        } else {
          setErrorRole(''); 
        }
      };
    const handleEmailChange = (e) => {
      const value = e.target.value;
      setEmail(value);
  
      if (emailRegex.test(value)) {
        setErrorEmail(''); 
      } else {
        setErrorEmail('Enter a valid email'); 
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
        
        if (regexAlf.test(value)&& value.length >= 4) {
              setErrorName(''); 
            } else {
              setErrorName('Enter a valid name'); 
            }
      };
      const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    
        if (value.length >= 8) {
          setErrorPassword(''); 
        } else {
          setErrorPassword('Password must have min 8 characters'); 
        }
      };

  return (
    <div className="container">
        <div className="signup-text">
            <h1>Sign Up</h1>
        </div>
        <div className="already-member">Already a member? 
            <Link to="/Login"><span> Login</span></Link>
        </div>
        <form method="POST" onSubmit={register}>
            <div className="form-group">
                <label for="role">Role</label>
                <select onChange={handleRoleChange} value={role} type="role" id="role" name="role">
                    <option value="" aria-describedby="Select your role">-Select your role-</option>
                    <option value="dr" aria-describedby="Doctor">Doctor</option>
                    <option value="patient" aria-describedby="patient">Patient</option>
                </select>
                {errorRole && <div className="err" style={{ color: 'red' }}>{errorRole}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={handleEmailChange} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="Email input box" />
                {errorEmail && <div className="err" style={{ color: 'red' }}>{errorEmail}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={handleNameChange}type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="Name input box" />
                {errorName && <div className="err" style={{ color: 'red' }}>{errorName}</div>}
            </div>

            <div className="form-group">
                <label for="phone">Phone</label>
                <input value={phone} onChange={handlePhoneChange} type="tel" name="phone" id="phone" required className="form-control" minlength="10" maxlength="10" placeholder="Enter your phone number" aria-describedby="Phone number input box" />
                {errorPhone && <div className="err" style={{ color: 'red' }}>{errorPhone}</div>}
            </div> 

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={handlePasswordChange} type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" />
                {errorPassword && <div className="err" style={{ color: 'red' }}>{errorPassword}</div>}
            </div> 

            <div className="btn-group">
                <button type="submit" className="btn submit-btn">Submit</button>
                <button type="reset" className="btn reset-btn">Reset</button>
            </div>  
        </form>
    </div>
    );
};
export default Sign_Up;