import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import Login from './login/Login';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Login />
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
