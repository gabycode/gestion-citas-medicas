import { Request, Response } from 'express';
import { CitaRepository } from '../../../domain/repositories/CitaRepository';

const citaRepository = new CitaRepository();

export class CitaController {
  static async crear(req: Request, res: Response) {
    try {
      const nuevaCita = await citaRepository.crearCita(req.body);
      res.status(201).json(nuevaCita);
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al crear cita', error });
    }
  }

  static async listar(req: Request, res: Response) {
    try {
      const citas = await citaRepository.obtenerCitas();
      res.status(200).json(citas);
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al obtener citas', error });
    }
  }

  static async obtenerPorId(req: Request, res: Response) {
    try {
      const cita = await citaRepository.obtenerCitaPorId(req.params.id);
      if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
      res.json(cita);
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al obtener cita', error });
    }
  }

  static async actualizar(req: Request, res: Response) {
    try {
      const cita = await citaRepository.actualizarCita(req.params.id, req.body);
      if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
      res.json(cita);
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al actualizar cita', error });
    }
  }

  static async eliminar(req: Request, res: Response) {
    try {
      const cita = await citaRepository.eliminarCita(req.params.id);
      if (!cita) return res.status(404).json({ message: 'Cita no encontrada' });
      res.json({ message: 'Cita eliminada' });
    } catch (error) {
        console.error('Error al crear cita:', error);
        res.status(500).json({ message: 'Error al eliminar cita', error });
    }
  }
}
