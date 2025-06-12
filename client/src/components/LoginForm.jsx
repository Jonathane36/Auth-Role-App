import React, { useState } from 'react';
import { login } from '../services/api';

const LoginForm = () => {
  // Form state for user input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Display backend or validation errors

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    try {
      setError(''); // Clear previous errors
      const result = await login({ email, password }); // Send login request to backend

      if (result.token) {
        // Save token to localStorage if login is successful
        localStorage.setItem('token', result.token);
        alert('Login successful');
      } else {
        // If no token, show message returned from backend
        setError(result.message || 'Login failed');
      }
    } catch (error) {
      console.error(error);
      setError('Login request failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      {/* Submit Button */}
      <button type="submit">Login</button>

      {/* Display error if exists */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
