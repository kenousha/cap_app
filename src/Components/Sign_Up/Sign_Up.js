import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission
        // API Call to register user
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });
        const json = await response.json(); // Parse the response JSON
        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);
            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
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
                <select required id="role" name="role">
                    <option value="" aria-describedby="Select your role">-Select your role-</option>
                    <option value="dr" aria-describedby="Doctor">Doctor</option>
                    <option value="patient" aria-describedby="patient">Patient</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="Email input box" />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)}type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="Name input box" />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div>

            <div className="form-group">
                <label for="phone">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" required className="form-control" minlength="10" maxlength="10" placeholder="Enter your phone number" aria-describedby="Phone number input box" />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            </div> 

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" />
                {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
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