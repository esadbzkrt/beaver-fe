import React, { useState } from 'react';
import axios from 'axios';
import "./SignupForm.sass";

function SignupForm(props) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault(); // Form submit default behavior prevented

        const formData = {
            username: username,
            email: email,
            password: password
        };

        try {
            const response = await axios.post('https://api.example.com/signup', formData);
            console.log('Signup successful', response.data);
            // Handle successful signup, e.g., redirect to success page
            // history.push('/success');
        } catch (error) {
            console.error('Signup error:', error.message);
            // Handle error, show appropriate messages to the user
        }
    };

    return (
        <div className="signup-form">
            <h3>Sign Up</h3>
            <form onSubmit={handleSubmit}>
                <div className="signup-form-username">
                    <h3>Username</h3>
                    <input
                        className="signup-form-username-input"
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="signup-form-email">
                    <h3>E-Mail</h3>
                    <input
                        className="signup-form-email-input"
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="signup-form-password">
                    <h3>Password</h3>
                    <input
                        className="signup-form-password-input"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="signup-form-button">
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default SignupForm;
