export const getBooks = () => {
    const books = localStorage.getItem('books');
    return books ? JSON.parse(books) : [];
  };
  
  export const setBooks = (books) => {
    localStorage.setItem('books', JSON.stringify(books));
  };
  
  export const addBook = (book) => {
    const books = getBooks();
    const newBook = { ...book, id: Date.now().toString() };
    books.push(newBook);
    setBooks(books);
    return newBook;
  };
  
  export const updateBook = (updatedBook) => {
    const books = getBooks();
    const index = books.findIndex(book => book.id === updatedBook.id);
    if (index !== -1) {
      books[index] = updatedBook;
      setBooks(books);
      return true;
    }
    return false;
  };
  
  export const deleteBook = (id) => {
    const books = getBooks();
    const updatedBooks = books.filter(book => book.id !== id);
    setBooks(updatedBooks);
  };
  
  export const setIsAuthenticated = (value) => {
    localStorage.setItem('isAuthenticated', JSON.stringify(value));
  };
  
  export const getIsAuthenticated = () => {
    return JSON.parse(localStorage.getItem('isAuthenticated') || 'false');
  };