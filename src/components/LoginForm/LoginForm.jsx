import React from 'react';
import "./LoginForm.sass"

function LoginForm(props) {
    return (
        <div className="login-form">
            <h3> Login </h3>
            <div className="login-form-username">
                <h3>Username</h3>
                <input className="add-event-input" type="text" placeholder="Enter username"/>
            </div>
            <div className="login-form-password">
                <h3>Password</h3>
                <input className="add-event-input" type="password" placeholder="password"/>
            </div>
            <div className="login-form-button">
                    <button>Login</button>
            </div>
        </div>
    );
}

export default LoginForm;