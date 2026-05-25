import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exam from './exam'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Exam /> */}
    <App />
  </StrictMode>,
)
