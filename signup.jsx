import React, { useState } from 'react';
import './login.css';
import { CiUser, CiLock, CiMail } from 'react-icons/ci';


const Signup = ({ onBack }) => {
  const [showHint, setShowHint] = useState(false);

  const handleShowHint = () => {
    setShowHint(prev => !prev);
  };

  return (
    <div className="login-container">
      <h2>Create Account</h2>
      <form className="login-form">
        
        <div className="input-box">
          <CiUser />
          <input type="text" placeholder="Username" disabled />
        </div>
        <div className="input-box">
          <CiLock />
          <input type="password" placeholder="Password" disabled />
        </div>

        {showHint && (
          <div className="hint-box">
            <p><strong>Username:</strong> Nexora</p>
            <p><strong>Password:</strong> nexora@123</p>
          </div>
        )}

        <div className="button-group">
          <button
            type="button"
            className="login-btn"
            onClick={handleShowHint}
          >
            {showHint ? "Hide Credentials" : "Show Credentials"}
          </button>
          <button type="button" className="signup-btn" onClick={onBack}>
            Back to Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
