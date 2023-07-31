import React, { useState } from 'react';
import './LoginPage.css';
import profile from './profile.png';
import logo from '../Home/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'masood@gmail.com' && password === '123') {
      // Valid username and password, navigate to the homepage
        navigate('/');
    } else {
      // Invalid username or password, show error message
      setErrorMessage(true);
    }
  };

  return (
    <div>
      <div className="login_page">
        <div className="title_logo">
          <img src={logo} alt="" width="100px" />
          <h1 className="title">STAR SPORTS</h1>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <img src={profile} alt="" height="70px" />
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
           {errorMessage && <p className="error-message">Invalid Username or Password</p>}
          <button type="submit">Login</button>
          <button onClick={()=>{navigate('/signup')}}>
            <h4>Signup</h4>
            </button>
         </form>
      </div>
    </div>
  );
};

export default LoginPage;
