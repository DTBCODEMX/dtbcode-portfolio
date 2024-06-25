import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography } from '@mui/material';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error registering', error);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <Typography variant="h4" className="auth-title">SIGN UP</Typography>
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
        <Button
          variant="contained"
          className="auth-button"
          onClick={handleRegister}
        >
          SIGN UP
        </Button>
        <div className="auth-footer">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;