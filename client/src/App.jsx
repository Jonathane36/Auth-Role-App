import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import SignupForm from './components/SignupForm.jsx';
import LoginForm from './components/LoginForm.jsx';
import './App.css';

function App() {
  // State to demonstrate React functionality (default Vite counter)
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Logo Section */}
      <div>
        {/* Vite Logo Link */}
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        {/* React Logo Link */}
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1>Vite + React</h1>

      {/* Counter Section (default Vite example, optional) */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Auth App Section */}
      <div className="App">
        <h1>Auth Role App</h1>
        {/* Signup Form Component */}
        <SignupForm />

        {/* Login Form Component */}
        <LoginForm />
      </div>
    </>
  );
}

export default App;
