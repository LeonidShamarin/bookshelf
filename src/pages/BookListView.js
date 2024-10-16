import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';
import BookList from '../components/BookList';

const BookListView = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    setBooks(storedBooks);
  }, []);

  const handleEdit = (book) => {
    navigate(`/edit/${book.id}`);
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
  };

  const handleAddNew = () => {
    navigate('/add');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Your BookShelf
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddNew} sx={{ mb: 2 }}>
        Add New Book
      </Button>
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </Container>
  );
};

export default BookListView;