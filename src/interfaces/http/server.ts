import express from 'express';
import citaRoutes from './routes/CitasRoutes';
import doctorRoutes from './routes/DoctoresRoutes';
import pacienteRoutes from './routes/PacientesRoutes';
import healthRoutes from './routes/HealthRoutes';
import { errorHandler } from '../../shared/middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api/health', healthRoutes);
app.use('/api/citas', citaRoutes);
app.use('/api/doctores', doctorRoutes);
app.use('/api/pacientes', pacienteRoutes);
app.use(errorHandler);

export { app };