import { Request, Response, NextFunction } from 'express';
import { CrearCita } from '../../../application/use-cases/CrearCita';
import { CitaMongoRepository } from '../../../infrastructure/database/repositories/CitaMongoRepository';

const repo = new CitaMongoRepository();
const crearCita = new CrearCita(repo);

export const crearCitaHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { pacienteId, doctorId, fecha, motivo } = req.body;
  
      console.log('[DEBUG] Body recibido:', req.body); // 👈
  
      if (!pacienteId || !doctorId || !fecha || !motivo) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }
  
      const cita = await crearCita.execute({
        pacienteId,
        doctorId,
        fecha: new Date(fecha),
        motivo,
      });
  
      return res.status(201).json(cita);
    } catch (error) {
      console.error('[ERROR] crearCitaHandler:', error); // 👈
      next(error);
    }
  };
  
