import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./right.css";

const Right = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const btnpath = () => {
    navigate('/client');
  };

  const borderClass = isActive ? 'option freelance active' : 'option freelance';
  
  return (
    <div className="lines">
      <div className="top-bar">
        <div className="line-blue"></div>
        <div className="line-gray"></div>
        <div className="line-gray"></div>
      </div>
      <div className="info">
        <h2>Let’s Get started!</h2>
        <div className="subInfo">
          <p>How do you plan to use this platform</p>
        </div>
      </div>
      <div className="select">
        <div className="mainSelect">
          <div className="option freelance">
            <img src={"/freelance.png"} alt="freelancer" />
            <h4>Freelancer</h4>
            <p>I’m a freelancer ready to work for projects</p>
          </div>
          <div className={borderClass} onClick={handleClick}>
            <img src={"/client.png"} alt="client" />
            <h4>Client</h4>
            <p>I’m a client searching for talented freelancers</p>
          </div>
        </div>
      </div>
      <div className="btn">
        <button onClick={btnpath}>Next</button>
      </div>
    </div>
  );
};

export default Right;

