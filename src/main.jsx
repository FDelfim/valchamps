import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Components/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Navbar />
      <App />
    </>
  </React.StrictMode>
)
