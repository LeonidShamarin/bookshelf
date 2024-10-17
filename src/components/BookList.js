import React from 'react';
import { List, Typography, Box } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import BookItem from './BookItem';
import '../styles/BookList.css'

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
      <TransitionGroup>
        {books.map((book) => (
          <CSSTransition key={book.id} timeout={500} classNames="item">
            <BookItem
              book={book}
              onEdit={() => onEdit(book)}
              onDelete={() => onDelete(book.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </List>
  );
};

export default BookList;