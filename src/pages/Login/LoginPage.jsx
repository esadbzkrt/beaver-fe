import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./LoginPage.sass"

import LoginForm from '../../components/LoginForm/LoginForm';
import SignupForm from "../../components/SignupForm/SignupForm";

function LoginPage(props) {
    const navigate = useNavigate(); // useNavigate hook'unu kullanarak navigate fonksiyonunu alıyoruz

    const buttonText = props.page === "login" ? "Sign Up" : "Log In";

    // Butona tıklandığında yönlendirme fonksiyonu
    const handleButtonClick = () => {
        if (props.page === "login") {
            navigate('/signup'); // '/signup' sayfasına yönlendirme yapıyoruz
        } else {
            navigate('/login');
        }
    };

    return (
        <div>
            <div className="signup-form-button">
                {/* Butona onClick event'i ekleniyor */}
                <button onClick={handleButtonClick}>{buttonText}</button>
            </div>
            {props.page === "login" ? <LoginForm /> : <SignupForm />}
        </div>
    );
}

export default LoginPage;
