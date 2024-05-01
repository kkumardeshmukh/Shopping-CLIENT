import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/Auth';
import 'antd/dist/reset.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <StrictMode>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </StrictMode>
  </AuthProvider>
);


reportWebVitals();
