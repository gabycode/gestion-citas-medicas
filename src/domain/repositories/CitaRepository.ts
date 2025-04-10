import { Cita } from '../entities/Cita';

export interface CitaRepository {
  crear(cita: Cita): Promise<Cita>;
  listar(): Promise<Cita[]>;
}
