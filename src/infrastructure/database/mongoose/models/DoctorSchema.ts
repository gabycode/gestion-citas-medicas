import mongoose, { Document, Schema } from 'mongoose';

export interface Doctor extends Document {
  nombre: string;
  apellido: string;
  especialidad: string;
  telefono: string;
  email: string;
}

const DoctorSchema: Schema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    especialidad: { type: String, required: true },
    telefono: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  }
);

export const DoctorModel = mongoose.model<Doctor>('Doctor', DoctorSchema);
