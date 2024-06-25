import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, InputAdornment, useTheme } from '@mui/material';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleRegister = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el registro
    console.log('Registering with', email, password, confirmPassword);
  };

  return (
    <Box className="auth-container" sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Box className="auth-form">
        <Typography variant="h4" component="h1" gutterBottom className="auth-title">
          Sign Up
        </Typography>
        <form onSubmit={handleRegister}>
          <TextField
            label="User Name"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaUser />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaLock />
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} className="auth-button">
            Sign Up
          </Button>
        </form>
        <Typography variant="body2" align="center" mt={2}>
          Already have an account?{' '}
          <Link href="#" onClick={() => navigate('/login')} underline="none" sx={{ color: theme.palette.primary.main }}>
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Register;
