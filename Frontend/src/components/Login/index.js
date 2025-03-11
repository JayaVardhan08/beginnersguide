import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate()
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode:"cors",
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      localStorage.setItem("mail",loginData.email)
      //localStorage.setItem("token",token.token)
      console.log(await response.json())
      navigate("/courses")
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="username"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />
        <a href="forgot-password">Forgot Password ?</a>

        <button type="submit" className="login-form-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
