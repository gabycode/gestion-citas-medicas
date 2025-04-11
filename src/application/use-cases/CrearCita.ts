// import { CitaRepository } from '../../domain/repositories/CitaRepository';
// import { CrearCitaDTO } from '../dto/CrearCitaDTO';
// import { Cita } from '../../domain/entities/Cita';
// import { v4 as uuidv4 } from 'uuid';

// export class CrearCita {
//   constructor(private citaRepo: CitaRepository) {}

//   async ejecutar(data: CrearCitaDTO): Promise<Cita> {
//     const cita = new Cita(
//       uuidv4(),
//       data.pacienteId,
//       data.doctorId,
//       data.fecha,
//       data.motivo
//     );

//     return await this.citaRepo.crear(cita);
//   }
// }
