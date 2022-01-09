module.exports = {
  books: [
    {
      id: 1,
      titulo: "Harry Potter",
      editora: "Rocco",
      foto: "https://i.imgur.com/UH3IPXw.jpg",
      autores: ["JK Rowling", "..."],
    },
  ],

  getAllBooks: function () {
    return this.books;
  },

  newBook(titulo, editora, foto, autores) {
    const id = this.books.length + 1;
    this.books.push({
      id,
      titulo,
      editora,
      foto,
      autores,
    });
  },

  deleteBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  },

  updateBook(id, titulo, editora, foto, autores) {
    this.books = this.books.map((book) => {
      if (book.id === id) {
        return {
          id,
          titulo,
          editora,
          foto,
          autores,
        };
      }
      return book;
    });
  },
};
