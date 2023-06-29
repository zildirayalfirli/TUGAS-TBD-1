const pool = require('../../database');
const queries = require('./queries');

const getBook = (req, res) => {
    pool.query(queries.getBook, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getBookById = (req, res) => {
    const id_book = parseInt(req.params.id_book);
    pool.query(queries.getBookById, [id_book], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
};

const addBook = (req, res) => {
    const { name, genre, year, pages } = req.body;
    pool.query(queries.addBook, [name, genre, year, pages ], (error, results) => {
        if (error) throw error;
        res.status(201).send("Book Created!")
    });
};

const deleteBook =  (req, res) => {
    const id_book = parseInt(req.params.id_book);
    pool.query(queries.getBookById, [id_book], (error, results) => {
        const noBookFound = !results.rows.length;
        if (noBookFound){
            res.send("Book does not exist")
        }

        pool.query(queries.deleteBook, [id_book], (error, results) => {
            if (error) throw error;
            res.status(200).send("Book Removed");
        })
    });
};

const updateBook = (req, res) => {
    const id_book = parseInt(req.params.id_book);
    const { name } = req.body;

    pool.query(queries.getBookById, [id_book], (error, results) => {
        const noBookFound =!results.rows.length;
        if (noBookFound){
            res.send("Book does not exist");
        }

        pool.query(queries.updateBook, [name, id_book], (error, results) => {
            if (error) throw error;
            res.status(200).send("Book Updated!");
        })
    })
};

module.exports ={
    getBook,
    getBookById,
    addBook,
    deleteBook,
    updateBook,
};