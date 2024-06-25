import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import ColorModeProvider from './ToggleColorMode';
import './index.css';

function App() {
  return (
    <ColorModeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </ColorModeProvider>
  );
}

export default App;
