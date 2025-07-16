import React, { useState, useEffect } from 'react';
import './login.css';
import { CiUser, CiLock } from 'react-icons/ci';

const Login = ({ onLogin, onShowCredentials, autoFill }) => {
  const [username, setUsername] = useState(autoFill?.username || '');
  const [password, setPassword] = useState(autoFill?.password || '');

  useEffect(() => {
    if (autoFill) {
      setUsername(autoFill.username || '');
      setPassword(autoFill.password || '');
    }
  }, [autoFill]);

  const handleSubmit = e => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2>Nexora Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="input-box">
          <CiUser />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <CiLock />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-group">
          <button type="submit" className="login-btn">Login</button>
          <button type="button" className="signup-btn" onClick={onShowCredentials}>
            Show Credentials
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
