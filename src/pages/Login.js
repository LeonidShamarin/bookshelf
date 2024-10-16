import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
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
    <Container maxWidth="sm"
    >
     <Typography 
  variant="h4" 
  component="h1" 
  gutterBottom 
  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:10 }}
>
Welcome to BookShelf
  <EmojiEmotionsIcon sx={{ ml: 1 }} /> 
  
</Typography>
      <LoginForm onLogin={handleLogin} />
    </Container>
  );
};

export default Login;