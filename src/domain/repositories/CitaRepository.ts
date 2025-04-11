import { CitaModel } from '../../infrastructure/database/mongoose/models/CitaSchema';

export class CitaRepository {
  async crearCita(data: any) {
    return await CitaModel.create(data);
  }

  async obtenerCitas() {
    return await CitaModel.find().populate('paciente').populate('doctor');
  }

  async obtenerCitaPorId(id: string) {
    return await CitaModel.findById(id).populate('paciente').populate('doctor');
  }

  async actualizarCita(id: string, data: any) {
    return await CitaModel.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminarCita(id: string) {
    return await CitaModel.findByIdAndDelete(id);
  }
}
