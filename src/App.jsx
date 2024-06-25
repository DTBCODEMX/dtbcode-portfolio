import React from 'react';
import Header from './components/common/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TranslationProvider } from './TranslationContext';
import ToggleColorMode from './theme/ToggleColorMode';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PasswordRecovery from './components/auth/PasswordRecovery';
import MainContent from './components/common/MainContent';
import { AuthProvider } from './AuthContext';

function App() {
    return (
      <TranslationProvider>
        <ToggleColorMode>
          <AuthProvider>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
              </Routes>
            </Router>
          </AuthProvider>
        </ToggleColorMode>
      </TranslationProvider>
    );
  }
  
  export default App;
