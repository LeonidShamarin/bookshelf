import React from 'react';
import { ListItem, ListItemText, IconButton, Typography, Grid, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const BookItem = ({ book, onEdit, onDelete }) => {
  return (
    <ListItem component={Paper} elevation={2} style={{ marginBottom: '1rem', padding: '1rem' }}>
      <Grid container alignItems="center">
        <Grid item xs={9}>
          <ListItemText
            primary={<Typography variant="h6" color="secondary">{book.title}</Typography>}
            secondary={
              <>
                <Typography component="span" variant="body2" color="text.primary" >
                  by {book.author}
                </Typography>
                {` — ${book.year}`}
                {book.pages && <Typography variant="body2">PAGES: {book.pages}</Typography>}
              </>
            }
          />
        </Grid>
        <Grid item xs={3} container justifyContent="flex-end">
          <IconButton edge="end" aria-label="edit" color="success" onClick={() => onEdit(book)}
            sx={{ mr:1}}
            >
            <EditIcon />
          </IconButton>
          <IconButton edge="end" aria-label="delete" color="error" onClick={() => onDelete(book.id)}>
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default BookItem;