import React, { useState } from 'react';
import './Login.css'
import {Link} from "react-router-dom"
import { API_URL } from '../../config';

export const Login = () => {
  return (
<div class="container">
            <div class="login-text">
                <h1>Login</h1>
            </div>
            <div class="new-member">Are you a new member?
            <Link to="/Sign_Up"><span>Sign Up Here</span></Link></div>
        <form>
            <div class="form-group">
                <label for="Email">Email</label>
                <input type="Email" name="Email" id="Email" class="form-control" placeholder="Enter your email" aria-describedby="Email input box" required/>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" required/>
                <span>Forgot Password?</span>
            </div>

            <div class="btn-group">
                <button type="submit" class="btn submit-btn mb-2 mr-1 waves-effect waves-light">Submit</button>
                <button type="reset" class="btn reset-btn">Reset</button>
            </div>
            
        </form>
    </div>
  );
};
export default Login;