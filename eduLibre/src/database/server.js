import express from 'express';
import apiRoutes from './routes/api.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
    res.send('¡Bienvenido a eduLibre!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
