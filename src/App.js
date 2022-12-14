import './App.css';

import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import Docs from './Pages/Docs';
import Resources from './Pages/Resources';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';

import { useEffect, useState } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="WebsiteName">My Safe Space</h1>
        <nav className="MainNav">
          <Link to="/" className="NavLink">Home</Link>
          <Link to="/Docs" className="NavLink">Docs</Link>
          <Link to="/Resources" className="NavLink">Resources</Link>
          <Link to="/AboutUs" className="NavLink">About Us</Link>
        </nav>
        <hr className="Line"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Docs" element={<Docs />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <br/>
        <br/>
        <br/>
      </div>
    </Router>
  );
}

export default App;
