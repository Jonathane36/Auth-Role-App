import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SignupLoginPage from './pages/SignupLoginPage'; 

import './App.css';


function App() {
  // State to demonstrate React functionality (default Vite counter)
  const [count, setCount] = useState(0);

  return (
    <Router>
      {/* Navigation Bar */}
      <Navbar />

      {/* Routes to different pages */}
      <Routes>

        {/* Home Page*/}
        <Route path="/" element={<HomePage count={count} setCount={setCount} />} />

        {/* Auth Page: contains both Signup and Login forms */}
        <Route path="/auth" element={<SignupLoginPage />} />

        {/* Auth Page: contains both Signup and Login forms */}
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
