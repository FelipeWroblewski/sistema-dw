import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Homepage from './login/Login';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
reportWebVitals();
