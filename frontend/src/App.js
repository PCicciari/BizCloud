import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Branches from './components/Branches';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/branches">Branches</Link>
            </nav>
            <Routes>
                <Route path="/" element={<h1>Welcome to the Online Business System</h1>} />
                <Route path="/branches" element={<Branches />} />
            </Routes>
        </Router>
    );
}

export default App;