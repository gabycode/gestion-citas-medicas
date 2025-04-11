import { Request, Response } from 'express';
import { PacienteRepository } from '../../../domain/repositories/PacienteRepository';

const pacienteRepo = new PacienteRepository();

export class PacienteController {
  static async crear(req: Request, res: Response) {
    const paciente = await pacienteRepo.crearPaciente(req.body);
    res.status(201).json(paciente);
  }

  static async listar(req: Request, res: Response) {
    const pacientes = await pacienteRepo.obtenerPacientes();
    res.json(pacientes);
  }

  static async obtenerPorId(req: Request, res: Response) {
    const paciente = await pacienteRepo.obtenerPacientePorId(req.params.id);
    if (!paciente) return res.status(404).json({ mensaje: 'Paciente no encontrado' });
    res.json(paciente);
  }

  static async actualizar(req: Request, res: Response) {
    const paciente = await pacienteRepo.actualizarPaciente(req.params.id, req.body);
    res.json(paciente);
  }

  static async eliminar(req: Request, res: Response) {
    await pacienteRepo.eliminarPaciente(req.params.id);
    res.status(204).send();
  }
}
