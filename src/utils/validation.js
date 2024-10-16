// export const validateBook = (book) => {
//     const errors = {};
  
//     if (!book.title.trim()) {
//       errors.title = 'Title is required';
//     }
  
//     if (!book.author.trim()) {
//       errors.author = 'Author is required';
//     }
  
//     if (!book.year) {
//       errors.year = 'Year is required';
//     } else if (isNaN(book.year) || book.year < 0 || book.year > new Date().getFullYear()) {
//       errors.year = 'Invalid year';
//     }
  
//     if (book.isbn && !/^(?:\d{10}|\d{13})$/.test(book.isbn)) {
//       errors.isbn = 'ISBN must be 10 or 13 digits';
//     }
  
//     return errors;
//   };
  
//   export const validateCredentials = (credentials) => {
//     const errors = {};
  
//     if (!credentials.username.trim()) {
//       errors.username = 'Username is required';
//     }
  
//     if (!credentials.password) {
//       errors.password = 'Password is required';
//     } else if (credentials.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }
  
//     return errors;
//   };