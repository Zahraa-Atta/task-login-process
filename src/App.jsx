import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/Container/container';
import Right from './Screen/Right/right';
import MainWelcome from './components/Welcome/welcome'

const App = () => {
  return (
    <Router>
      <Container>
       
        <MainWelcome />
        
            <Routes>
           <Route path="/" element={<Right />} /> 
       
            </Routes>
      
      
      </Container>
    </Router>
  );
};

export default App;