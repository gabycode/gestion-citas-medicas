import { Request, Response } from 'express';
import { DoctorRepository } from '../../../domain/repositories/DoctorRepository';

const doctorRepo = new DoctorRepository();

export class DoctorController {
  static async crear(req: Request, res: Response) {
    const doctor = await doctorRepo.crearDoctor(req.body);
    res.status(201).json(doctor);
  }

  static async listar(req: Request, res: Response) {
    const doctores = await doctorRepo.obtenerDoctores();
    res.json(doctores);
  }

  static async obtenerPorId(req: Request, res: Response) {
    const doctor = await doctorRepo.obtenerDoctorPorId(req.params.id);
    if (!doctor) return res.status(404).json({ mensaje: 'Doctor no encontrado' });
    res.json(doctor);
  }

  static async actualizar(req: Request, res: Response) {
    const doctor = await doctorRepo.actualizarDoctor(req.params.id, req.body);
    res.json(doctor);
  }

  static async eliminar(req: Request, res: Response) {
    await doctorRepo.eliminarDoctor(req.params.id);
    res.status(204).send();
  }
}
