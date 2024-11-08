import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container/container';
import Right from './Screen/Right/right';
import Client from  './Screen/Client/client'
import Otp from './Screen/Otp/otp'
import MainWelcome from './components/Welcome/welcome'

const App = () => {
  return (
    <Router>
      <Container>
       
        <MainWelcome />
        
            <Routes>
           <Route path="/" element={<Right />} /> 
           <Route path="/client" element={<Client />} /> 
           <Route path="/otp" element={<Otp/>} /> 
       
            </Routes>
      
      
      </Container>
    </Router>
  );
};

export default App;