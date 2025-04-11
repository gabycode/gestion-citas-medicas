import { DoctorModel } from '../../infrastructure/database/mongoose/models/DoctorSchema';

export class DoctorRepository {
  async crearDoctor(data: any) {
    return await DoctorModel.create(data);
  }

  async obtenerDoctores() {
    return await DoctorModel.find();
  }

  async obtenerDoctorPorId(id: string) {
    return await DoctorModel.findById(id);
  }

  async actualizarDoctor(id: string, data: any) {
    return await DoctorModel.findByIdAndUpdate(id, data, { new: true });
  }

  async eliminarDoctor(id: string) {
    return await DoctorModel.findByIdAndDelete(id);
  }
}
