// import { CitaRepository } from '../../../domain/repositories/CitaRepository';
// import { Cita } from '../../../domain/entities/Cita';
// import { CitaModel } from '../mongoose/models/CitaSchema';

// export class CitaMongoRepository implements CitaRepository {
//   async crear(cita: Cita): Promise<Cita> {
//     const created = await CitaModel.create({
//       pacienteId: cita.pacienteId,
//       doctorId: cita.doctorId,
//       fecha: cita.fecha,
//       motivo: cita.motivo,
//     });

//     return new Cita(
//       created._id.toString(),
//       created.pacienteId,
//       created.doctorId,
//       created.fecha,
//       created.motivo
//     );
//   }

//   async listar(): Promise<Cita[]> {
//     const citas = await CitaModel.find().exec();

//     return citas.map((c) =>
//       new Cita(
//         c._id.toString(),
//         c.pacienteId,
//         c.doctorId,
//         c.fecha,
//         c.motivo
//       )
//     );
//   }

//   async buscarPorId(id: string): Promise<Cita | null> {
//     const found = await CitaModel.findById(id).exec();
//     if (!found) return null;

//     return new Cita(
//       found._id.toString(),
//       found.pacienteId,
//       found.doctorId,
//       found.fecha,
//       found.motivo
//     );
//   }
// }
