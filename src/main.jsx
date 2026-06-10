import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Jornada from './Components/Jornada.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jornada/>
  </StrictMode>,
)
