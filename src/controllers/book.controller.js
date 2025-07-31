import * as bookServices from '../services/book.service.js';

export const getAllBooks = () => {

}

export const createBorrow = async (req, res) => {
    const id = req.params.id;

    const bookBorrow = await bookServices.createBorrow(id);

    if (bookBorrow){
        return res.status(201).json({ message: "Prestamo exitoso", bookBorrow })
    }
}