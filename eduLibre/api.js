import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import apiRouter from './api.js'; // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});