import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Make sure you have index.css in your src folder for custom styles
import App from './App';

// This code mounts the React application to the 'root' div in your index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
