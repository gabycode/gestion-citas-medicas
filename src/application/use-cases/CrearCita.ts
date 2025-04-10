import { CrearCitaDTO } from '../dto/CrearCitaDTO';
import { Cita } from '../../domain/entities/Cita';
import { CitaRepository } from '../../domain/repositories/CitaRepository';

export class CrearCita {
  constructor(private readonly repo: CitaRepository) {}

  async execute(data: CrearCitaDTO): Promise<Cita> {
    const cita = new Cita(
      Date.now().toString(), // o usa UUID si prefieres
      data.pacienteId,
      data.doctorId,
      data.fecha,
      data.motivo
    );

    return await this.repo.crear(cita);
  }
}
