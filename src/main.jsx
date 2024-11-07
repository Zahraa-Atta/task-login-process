import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainWelcome from './components/Welcome/welcome'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainWelcome/>
   
  </StrictMode>,
)


