import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Appp from './login_app'; 
import UserContext from './context/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <Appp /> 
    </UserContext>
  </React.StrictMode>
);

