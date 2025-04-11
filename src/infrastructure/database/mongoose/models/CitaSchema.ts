import mongoose, { Document, Schema } from 'mongoose';

export interface Cita extends Document {
  fecha: Date;
  hora: string;
  paciente: mongoose.Types.ObjectId;
  doctor: mongoose.Types.ObjectId;
}

const CitaSchema: Schema = new Schema(
  {
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    paciente: { type: mongoose.Schema.Types.ObjectId, ref: 'Paciente', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
  },
  {
    timestamps: true,
  }
);

export const CitaModel = mongoose.model<Cita>('Cita', CitaSchema);
