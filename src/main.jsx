import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainWelcome from './components/Welcome/Welcome'
import MainSeleact from './Screen/Seleact/seleact'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainWelcome/>
   
  </StrictMode>,
)


