import { PacienteModel } from '../../infrastructure/database/mongoose/models/PacienteSchema';

export class PacienteRepository {
  async crearPaciente(data: any) {
    return await PacienteModel.create(data);
  }

  async obtenerPacientes() {
    return await PacienteModel.find();
  }

  async obtenerPacientePorId(id: string) {
    return await PacienteModel.findById(id);
  }

  async actualizarPaciente(id: string, data: any) {
    return await PacienteModel.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminarPaciente(id: string) {
    return await PacienteModel.findByIdAndDelete(id);
  }
}
