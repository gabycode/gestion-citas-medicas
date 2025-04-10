import { DataSource } from 'typeorm';
import { CitaORMEntity } from './typeorm/CitaORMEntity';
import { DoctorORMEntity } from './typeorm/DoctorORMEntity';
import { PacienteORMEntity } from './typeorm/PacienteORMEntity';

export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: process.env.MONGO_URL || 'mongodb://mongo:27017/gestion-citas',
  synchronize: true,
  logging: false,
  entities: [
    CitaORMEntity, 
    DoctorORMEntity, 
    PacienteORMEntity,
  ],
});
