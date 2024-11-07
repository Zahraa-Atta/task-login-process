import React, { useState } from "react";
import Container from "../../components/Container/container.jsx";
import "./seleact.css";

const MainSeleact = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelectRole = (role) => {
    setSelectedRole(role);
  };

  return (
    <Container>
      <div className="rightCart">
        <div className="whiteCard">
          <div className="title">
            <h1>Let’s Get started!</h1>
            <p className="sub">How do you plan to use this platform</p>
          </div>

          <div className="role-selection">
            <div
              className={`role-card ${selectedRole === "Freelancer" ? "selected" : ""}`}
              onClick={() => handleSelectRole("Freelancer")}
            >
              <i className="icon freelancer-icon"></i>
              
              <h2>Freelancer</h2>
              <p>I'm a freelancer ready to work for projects</p>
            </div>
            <div
              className={`role-card ${selectedRole === "Client" ? "selected" : ""}`}
              onClick={() => handleSelectRole("Client")}
            >
              <i className="icon client-icon"></i>
              <h2>Client</h2>
              <p>I'm a client searching for talented freelancers</p>
            </div>
          </div>

          <button className="next-button" disabled={!selectedRole}>
            Next
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MainSeleact;


