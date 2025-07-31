import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllBooks = async () => {
    const books = await prisma.books.findMany()
    return books;
}

export const createBorrow = async (id) => {
    const bookBorrow = await prisma.books.findUnique({
        where: {
            id: id,
        },
    })

    if (bookBorrow.disponible != true) {
        throw new Error('libro prestado')
    }
}