import { Schema, model } from 'mongoose';

const CitaSchema = new Schema({
  pacienteId: { type: String, required: true },
  doctorId: { type: String, required: true },
  fecha: { type: Date, required: true },
  motivo: { type: String, required: true },
}, { timestamps: true });

export const CitaModel = model('Cita', CitaSchema);
