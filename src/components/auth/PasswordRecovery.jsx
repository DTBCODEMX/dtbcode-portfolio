import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase';
import { TextField, Button, Typography } from '@mui/material';
import './Auth.css';

const PasswordRecovery = () => {
    const [email, setEmail] = useState('');
  
    const handlePasswordReset = async () => {
      try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset email sent');
      } catch (error) {
        console.error('Error sending password reset email', error);
      }
    };
  
    return (
      <div className="auth-container">
        <div className="auth-form">
          <Typography variant="h4" className="auth-title">PASSWORD RECOVERY</Typography>
          <TextField
            label="User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            className="auth-input"
          />
          <Button
            variant="contained"
            className="auth-button"
            onClick={handlePasswordReset}
          >
            RESET PASSWORD
          </Button>
        </div>
      </div>
    );
  };
  
  export default PasswordRecovery;