import { Schema, model } from 'mongoose';

const PacienteSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  telefono: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
}, { timestamps: true });

export const PacienteModel = model('Paciente', PacienteSchema);
