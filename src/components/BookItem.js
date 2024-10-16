import React from 'react';
import { ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookItem = ({ book, onEdit, onDelete }) => {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={onEdit}>
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" onClick={onDelete}>
            <DeleteIcon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={book.title}
        secondary={
          <>
            <Typography component="span" variant="body2" color="text.primary">
              {book.author}
            </Typography>
            {` — ${book.year}`}
          </>
        }
      />
    </ListItem>
  );
};

export default BookItem;