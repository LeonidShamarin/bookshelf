import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevCredentials => ({
      ...prevCredentials,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(credentials);
    
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 300, margin: 'auto', mt:10 }}>
      <Typography variant="h6"  gutterBottom>
        Login 
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Username"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        name="password"
        type="password"
        value={credentials.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginForm;