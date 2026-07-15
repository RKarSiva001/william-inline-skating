import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Import Bootstrap CSS & Icons first so they don't overwrite your custom styles
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

// 2. Import Bootstrap's interactive JavaScript library (Required for the Mobile Hamburger Menu)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 3. Import your custom stylesheet LAST to ensure custom variables override everything
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)