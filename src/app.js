import express from 'express';
import dotenv from 'dotenv';

//importaciones de rutas
import bookRoutes from './routes/book.routes.js';

dotenv.config();

const app = express();

app.use('/books/', bookRoutes)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})