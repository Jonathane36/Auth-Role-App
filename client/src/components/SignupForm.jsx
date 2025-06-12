import React, { useState } from 'react';
import { signup } from '../services/api';

const SignupForm = () => {
  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default to 'user' role
  const [error, setError] = useState('');   // To display backend error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    try {
      setError('');
      const result = await signup({ email, password, role }); // Send POST to backend
      if (result.message === 'User already exists') {
        setError(result.message); // Display error if email is duplicate
      } else {
        alert(result.message || 'User registered successfully'); // Generic success alert
      }
    } catch (error) {
      console.error(error);
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

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

      {/* Role Dropdown */}
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        {/* <option value="admin">Admin</option> */} {/* Optional: Hide if needed */}
      </select>

      {/* Submit Button */}
      <button type="submit">Signup</button>

      {/* Display error below form */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default SignupForm;
