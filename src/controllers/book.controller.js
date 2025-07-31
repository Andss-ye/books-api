import * as bookServices from '../services/book.service.js';

export const getAllBooks = async (req, res) => {
    try {
        const books = await bookServices.getAllBooks();
        return res.status(200).json({ message: "todos los libros", books })
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const getBookById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const book = await bookServices.getBookById(id);
        return res.status(200).json({ message: "libro encontrado", book })
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const createBorrow = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bookBorrow = await bookServices.createBorrow(id);
        if (bookBorrow) {
            return res.status(201).json({ message: "Libro marcado como prestado con exito", bookBorrow })
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

export const returnBook = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bookReturn = await bookServices.returnBook(id);
        if (bookReturn) {
            return res.status(201).json({ message: "Libro marcado como devuelto con exito", bookReturn })
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}