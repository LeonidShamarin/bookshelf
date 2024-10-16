import React from 'react';
import { List, Typography, Box } from '@mui/material';
import BookItem from './BookItem';

const BookList = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="h6">No books in your library yet.</Typography>
      </Box>
    );
  }

  return (
    <List sx={{ width: '100%', maxWidth: 600, margin: 'auto' }}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          book={book}
          onEdit={() => onEdit(book)}
          onDelete={() => onDelete(book.id)}
        />
      ))}
    </List>
  );
};

export default BookList;