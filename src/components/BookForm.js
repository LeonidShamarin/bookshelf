import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const BookForm = ({ onSubmit, initialData = {} }) => {
  const [book, setBook] = useState({
    title: initialData.title || "",
    author: initialData.author || "",
    year: initialData.year || "",
    pages: initialData.pages || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue =
      name === "year" || name === "pages" ? parseInt(value, 10) || "" : value;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: processedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (book.year <= 0) {
      alert("Year must be greater than 0.");
      return;
    }

    if (book.pages < 0) {
      alert("Pages cannot be negative.");
      return;
    }

    onSubmit(book);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, margin: "auto" }}
    >
     
      <Typography variant="h4" component="h1"  gutterBottom
      sx={{ mt:10 }}
      >
        {initialData.title ? "Edit Book" : "Add New Book"}
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Title"
        name="title"
        value={book.title}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Author"
        name="author"
        value={book.author}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Year"
        name="year"
        type="number"
        value={book.year}
        onChange={handleChange}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Pages"
        name="pages"
        type="number"
        value={book.pages}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
        {initialData.title ? "Update Book" : "Add Book"}
      </Button>
    </Box>
  );
};

export default BookForm;
