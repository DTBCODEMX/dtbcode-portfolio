import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Link, InputAdornment, useTheme } from '@mui/material';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí iría la lógica para manejar el login
    console.log('Logging in with', email, password);
  };

  return (
    <Box className="auth-container" sx={{ bgcolor: theme.palette.background.default, color: theme.palette.text.primary }}>
      <Box className="auth-form">
        <Typography variant="h4" component="h1" gutterBottom className="auth-title">
          Sign In
        </Typography>
        <form onSubmit={handleLogin}>
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
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Link href="#" underline="none" sx={{ color: theme.palette.primary.main }}>
              Forgot?
            </Link>
          </Box>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }} className="auth-button">
            Sign In
          </Button>
        </form>
        <Typography variant="body2" align="center" mt={2}>
          Don't have an account?{' '}
          <Link href="#" onClick={() => navigate('/register')} underline="none" sx={{ color: theme.palette.primary.main }}>
            Signup
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
