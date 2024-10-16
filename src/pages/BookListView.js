import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper } from '@mui/material';
import BookList from '../components/BookList';
import NavBar from '../components/NavBar';
import { getBooks, deleteBook } from '../utils/localStorage';

const BookListView = ({ setIsAuthenticated }) => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(getBooks());
  }, []);

  const handleEdit = (book) => {
    navigate(`/edit/${book.id}`);
  };

  const handleDelete = (id) => {
    deleteBook(id);
    setBooks(getBooks());
  };

  return (
    <>
      <NavBar setIsAuthenticated={setIsAuthenticated} />
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper elevation={3} style={{ padding: '1rem' }}>
              <Typography variant="h4" component="h1" gutterBottom
               sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:1 }}
              >
                Your BookShelf
              </Typography>
              <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BookListView;