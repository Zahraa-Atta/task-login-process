import React, { useState } from 'react';
import { OtpInput } from 'reactjs-otp-input'; 
import './otp'
const Otp = () => {
  const [otp, setOtp] = useState('');  
  const handleOtpChange = (otp) => {
    setOtp(otp);

    setIsButtonDisabled(otp.length !== 6); 
  };

  return (
    <div className="otpstyle"> 
    <OtpInput 
      value={otp} 
      onChange={handleOtpChange} 
      numInputs={6}  
      separator={<span></span>}  
      containerStyle="otp-container-style"
      inputStyle="otp-input-style"
    />

    </div>
  );
};

export default Otp;
