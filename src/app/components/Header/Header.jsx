import React from 'react';
import './Header.sass';
import {useNavigate} from 'react-router-dom';
import {GiBeaver} from "react-icons/gi";
import {FaRegUser} from "react-icons/fa";

function Header(props) {
    const navigate = useNavigate();

    const logoButtonClick = () => {
            navigate('/'); // Navigate to '/signup' if currently on 'login' page
    };

    return (
        <div className="header">
            <button className="header-button" onClick={logoButtonClick}>
                <div className="header-logo">
                    <GiBeaver className="header-logo-icon"/>
                    <div className="header-logo-name">beaver</div>
                </div>
            </button>
            <div className="header-user">
                <div className="header-user-name">User Name</div>
                <FaRegUser className="header-user-logo"/>
            </div>
        </div>
    );
}

export default Header;

