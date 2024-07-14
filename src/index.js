import React from 'react';
import ReactDOM from 'react-dom/client'; // Update to use ReactDOM from 'react-dom/client'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
