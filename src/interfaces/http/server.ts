import express from 'express';
import citaRoutes from './routes/CitasRoutes';
import { errorHandler } from '../../shared/middlewares/errorHandler';

const app = express();

app.use(express.json());

// Importar rutas
// Aquí puedes importar otras rutas si las tienes
app.use('/citas', citaRoutes); // 👈 Montar rutas

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

app.use(errorHandler); // 👈 Middleware global de errores

export default app;
