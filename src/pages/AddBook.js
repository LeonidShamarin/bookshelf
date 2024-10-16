import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const navigate = useNavigate();

  const handleAddBook = (newBook) => {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const bookWithId = { ...newBook, id: Date.now().toString() };
    books.push(bookWithId);
    localStorage.setItem('books', JSON.stringify(books));
    
    navigate('/books');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add New Book
      </Typography>
      <BookForm onSubmit={handleAddBook} />
    </Container>
  );
};

export default AddBook;