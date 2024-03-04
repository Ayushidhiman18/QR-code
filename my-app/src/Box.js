import React from 'react';
import './Boxes.css';

function Box() {
    return (
        <div className="boxes">
            <h2>Register</h2>
            
            <form action = "http://localhost:3001/register" method="POST" className="form">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="mobileNumber">Mobile Number:</label>
                <input type="tel" id="mobileNumber" name="mobileNumber" required />

                <button type="submit">Submit</button>
            </form>
            <h2>Sign In</h2>
            <form className="form">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <button type="submit">Submit</button>
            </form>
        </div>      
    );
}


export default Box;