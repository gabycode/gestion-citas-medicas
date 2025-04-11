import { Schema, model } from 'mongoose';

const DoctorSchema = new Schema({
  nombre: { type: String, required: true },
  especialidad: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
}, { timestamps: true });

export const DoctorModel = model('Doctor', DoctorSchema);
