import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import BookForm from '../components/BookForm';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const foundBook = books.find(b => b.id === id);
    if (foundBook) {
      setBook(foundBook);
    } else {
      navigate('/books');
    }
  }, [id, navigate]);

  const handleEditBook = (updatedBook) => {
    const books = JSON.parse(localStorage.getItem('books') || '[]');
    const updatedBooks = books.map(b => b.id === id ? { ...updatedBook, id } : b);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    navigate('/books');
  };

  if (!book) return null;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Edit Book
      </Typography>
      <BookForm onSubmit={handleEditBook} initialData={book} />
    </Container>
  );
};

export default EditBook;