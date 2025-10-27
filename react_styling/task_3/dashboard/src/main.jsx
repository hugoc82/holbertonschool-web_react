import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';                 // indispensable pour Tailwind/utilitaires
import App from './App/App.jsx';     // <-- bon chemin vers l’App stylée

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
