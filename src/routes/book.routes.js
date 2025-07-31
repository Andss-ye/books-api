import { Router } from "express";
import { getAllBooks, getBookById, createBorrow } from "../controllers/book.controller.js";

const router = Router();

router.get('/', getAllBooks)

router.get('/:id', getBookById)

router.post('/:id/borrow', createBorrow)

export default router;