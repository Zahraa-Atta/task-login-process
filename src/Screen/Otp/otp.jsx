import React, { useState } from 'react';
import {OtpInput} from "reactjs-otp-input"  
import './otp.css';

const Otp = () => {
  const [otp, setOtp] = useState('');  
  const [isValid, setIsValid] = useState(false);  

  const handleOtpChange = (otp) => {
    setOtp(otp);
    setIsValid(otp.length === 6);  
  };

  const btnpath = () => {
    if (isValid) {
      console.log("تم إرسال الرمز");
    }
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
      <OtpInput 
  value={otp} 
  onChange={handleOtpChange} 
  numInputs={6}  
  containerStyle="otp-container-style"
  inputStyle="otp-input-style"
/>


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

export default Otp;