import mongoose, { Document, Schema } from 'mongoose';

export interface Paciente extends Document {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  telefono: string;
  email: string;
}

const PacienteSchema: Schema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    fechaNacimiento: { type: Date, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const PacienteModel = mongoose.model<Paciente>('Paciente', PacienteSchema);
