import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./client.css";

const ClientScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    const handlePhoneNumberChange = (e) => {
        const inputValue = e.target.value;
        setPhoneNumber(inputValue);

        const regex = /^(77|78|75)\d{8}$/; 
        if (regex.test(inputValue)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const btnpath = () => {
        if (isValid) navigate('/otp');
    };

    return (
        <div className="lines">
            <div className="top-bar">
                <div className="line-blue"></div>
                <div className="line-blueTwo"></div>
                <div className="line-grayThree"></div>
                <div className="line-gray"></div>
            </div>
            <div className="info">
                <h2>Enter Your Phone Number</h2>
                <div className="subInfo">
                    <p>
                        Enter your phone number to verify your identity and the validity of
                        your number to safely activate your account on the platform.
                    </p>
                </div>
            </div>
            <div className="inputNo">
                <h1>Phone Number</h1>
                <button 
                    style={{
                        border: isValid ? '2px solid rgba(60, 151, 175, 1)' : '2px solid transparent',
                    }}
                >
                    <img src={"/iraq.png"} alt="Iraq Flag" /> +964
                </button>
                <input 
                    type="number" 
                    inputMode="numeric"
                    placeholder="Enter Your Phone Number"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    style={{
                        border: isValid ? '2px solid rgba(60, 151, 175, 1) !important' : '2px solid rgba(235, 235, 235, 1) !important',
                    }}
                />
            </div>
            <div className="btn">
                <button 
                    onClick={btnpath} 
                    style={{
                        backgroundColor: isValid ? 'rgba(60, 151, 175, 1)' : '', 
                        cursor: isValid ? 'pointer' : 'not-allowed',  
                        color: isValid ? 'rgba(255, 255, 255, 1)' : '',
                        fontWeight: isValid ? 'bold' : 'normal'
                    }}
                    disabled={!isValid}
                >
                    Send verification code
                </button>
            </div>
        </div>
    );
};

export default ClientScreen;

