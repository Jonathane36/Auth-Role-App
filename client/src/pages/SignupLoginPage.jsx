
import React from 'react';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

// This page contains both the Signup and Login forms
const SignupLoginPage = () => {
  return (
    <div className="App">
      <h1>Auth Role App</h1>
      <SignupForm />
      <LoginForm />
    </div>
  );
};

export default SignupLoginPage;
