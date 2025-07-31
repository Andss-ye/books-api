import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: "todos los libros"})
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `libro por id #${id}`})
})

router.post('/:id/borrow', (req, res) => {
    const id = req.params.id
    res.status(200).json({ message: `tratando de crear un prestamo del libro #${id}`})
})

export default router;