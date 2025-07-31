import { Router } from "express";
import { getAllBooks, getBookById, createBorrow, returnBook } from "../controllers/book.controller.js";

const router = Router();

router.get('/', getAllBooks)

router.get('/:id', getBookById)

router.post('/:id/borrow', createBorrow)

router.post('/:id/return', returnBook)

export default router;