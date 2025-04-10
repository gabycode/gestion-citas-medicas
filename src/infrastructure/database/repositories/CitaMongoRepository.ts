import { CitaRepository } from '../../../domain/repositories/CitaRepository';
import { Cita } from '../../../domain/entities/Cita';
import { CitaORMEntity } from '../typeorm/CitaORMEntity';
import { AppDataSource } from '../datasource';

export class CitaMongoRepository implements CitaRepository {
  private ormRepo = AppDataSource.getMongoRepository(CitaORMEntity);

  async crear(cita: Cita): Promise<Cita> {
    const created = this.ormRepo.create(cita);
    const saved = await this.ormRepo.save(created);
    return new Cita(
      saved.id,
      saved.pacienteId,
      saved.doctorId,
      saved.fecha,
      saved.motivo
    );
  }

  async listar(): Promise<Cita[]> {
    const citas = await this.ormRepo.find();
    return citas.map(c =>
      new Cita(c.id, c.pacienteId, c.doctorId, c.fecha, c.motivo)
    );
  }
}
