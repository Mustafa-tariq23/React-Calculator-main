import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './components/Calculator.jsx';
import Quotes from './components/Quotes.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <Router>
      <div>
        <div id="navbar">
          <ul id="nav">
            <li><Link to="/" className='Navicon'>Home</Link></li>
            <li><Link to="/calculator" className='Navicon'>Calculator</Link></li>
            <li><Link to="/quotes" className='Navicon'>Quotes</Link></li>
          </ul>
        </div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

