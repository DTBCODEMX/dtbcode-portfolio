import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with password and email', error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/');
    } catch (error) {
      console.error('Error logging in with Google', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <Typography variant="h4" className="auth-title">SIGN IN</Typography>
        <TextField
          label="User Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          className="auth-input"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          className="auth-input"
        />
        <Link to="/password-recovery" className="auth-link">Forgot?</Link>
        <Button
          variant="contained"
          className="auth-button"
          onClick={handleLogin}
        >
          SIGN IN
        </Button>
        <Button
          variant="contained"
          className="auth-button"
          onClick={handleGoogleLogin}
          style={{ marginTop: '10px' }}
        >
          SIGN IN WITH GOOGLE
        </Button>
        <div className="auth-footer">
          Don't have an account? <Link to="/register">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;