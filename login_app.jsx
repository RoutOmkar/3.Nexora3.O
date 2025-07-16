import React, { useState } from 'react';
import Login from './login';
import App from './App';

function LoginApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [autoFillData, setAutoFillData] = useState({ username: '', password: '' });

  const handleLogin = (username, password) => {
    if (username === "Nexora" && password === "admin123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  // ✅ Replaces SignUp button functionality with Show Credentials
  const handleShowCredentials = () => {
    setAutoFillData({ username: "Nexora", password: "admin123" });
  };

  if (isLoggedIn) return <App />;

  return (
    <Login onLogin={handleLogin} onShowCredentials={handleShowCredentials} autoFill={autoFillData} />
  );
}

export default LoginApp;
