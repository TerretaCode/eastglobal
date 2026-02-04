import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Initialize Google Analytics from environment variables
if (import.meta.env.VITE_GA_ID) {
    window.loadGA(import.meta.env.VITE_GA_ID);
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
