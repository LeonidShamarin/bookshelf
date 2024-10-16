import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import LoginForm from '../components/LoginForm';

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    if (credentials.username === 'user' && credentials.password === 'password') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/books');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Login to BookShelf
      </Typography>
      <LoginForm onLogin={handleLogin} />
    </Container>
  );
};

export default Login;