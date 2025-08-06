import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRoute} from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRoute>
      <App />
    </BrowserRoute> */}
    <App/>
  </StrictMode>
)
