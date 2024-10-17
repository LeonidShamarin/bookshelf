import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
import BookListView from './pages/BookListView';
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { getIsAuthenticated, setIsAuthenticated } from './utils/localStorage';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#673ab7',
    }
  },
});

function App() {
  const [isAuthenticated, setIsAuthenticatedState] = useState(getIsAuthenticated());

  const handleSetIsAuthenticated = (value) => {
    setIsAuthenticatedState(value);
    setIsAuthenticated(value);    
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={handleSetIsAuthenticated} />} />
          <Route 
            path="/books" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}>
                <BookListView setIsAuthenticated={handleSetIsAuthenticated}/>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/add" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AddBook />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/edit/:id" 
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <EditBook />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/books" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;