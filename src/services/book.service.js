import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

export const getAllBooks = async () => {
    const books = await prisma.books.findMany()
    if (books.length === 0) {
        throw new Error('No hay libros')
    }
    return books;
}

export const getBookById = async (id) => {
    const book = await prisma.books.findUnique({
        where: {
            id: id,
        },
    })

    if (!book) {
        throw new Error('El libro no existe')
    }
    return book;
}

export const createBorrow = async (id) => {
    const book = await getBookById(id);

    if (book.disponible != true) {
        throw new Error('El libro ya esta prestado')
    }

    const bookBorrow = await prisma.books.update({
        where: { id: id },
        data: { disponible: false },
    })
    return bookBorrow;
}

export const returnBook = async (id) => {
    const book = await getBookById(id);

    if (book.disponible != false) {
        throw new Error('El libro no esta prestado')
    }

    const bookReturn = await prisma.books.update({
        where: { id: id },
        data: { disponible: true },
    })
    return bookReturn;
}