const getBook = "SELECT * FROM book";
const getBookById = "SELECT * FROM book WHERE id_book = $1";
const addBook = "INSERT INTO book (name, genre, year, pages) VALUES ($1, $2, $3, $4)";
const deleteBook = "DELETE FROM book WHERE id_book = $1";
const updateBook = "UPDATE book SET name = $1 WHERE id_book= $2";

module.exports = {
    getBook,
    getBookById,
    addBook,
    deleteBook,
    updateBook,
};

