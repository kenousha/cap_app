import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';
const Login = () => {
  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  // Get navigation function from react-router-dom
  const navigate = useNavigate();
  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);
  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);
      // Redirect to home page and reload the window
      navigate('/');
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

  return (
    <div class="container">
            <div class="login-text">
                <h1>Login</h1>
            </div>

            <div class="new-member">Are you a new member?
            <Link to="/Sign_Up"><span>Sign Up Here</span></Link></div>
        <form onSubmit={login}>
            <div class="form-group">
                <label htmlFor="Email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="Email" name="Email" id="Email" class="form-control" placeholder="Enter your email" aria-describedby="Email input box" required/>
            </div>

            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" name="password" id="password" class="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" required/>
                <span>Forgot Password?</span>
            </div>

            <div class="btn-group">
                <button type="submit" class="btn submit-btn">Submit</button>
                <button type="reset" class="btn reset-btn">Reset</button>
            </div>
            
        </form>
    </div>
  );
};
export default Login;