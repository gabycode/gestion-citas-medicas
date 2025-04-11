import request from 'supertest';
import mongoose from 'mongoose';
import { app } from '../interfaces/http/server';
import { connectDB } from '../infrastructure/database/mongoose/mongoose';

let pacienteId: string;
let doctorId: string;

beforeAll(async () => {
  await connectDB();

const pacienteRes = await mongoose.connection.collection('pacientes').insertOne({
  nombre: 'Juan',
  apellido: 'Pérez',
  cedula: '123456789',
  telefono: '8090000000',
  email: 'juan@example.com'
});

const doctorRes = await mongoose.connection.collection('doctores').insertOne({
  nombre: 'Dra. Ana',
  apellido: 'Ramírez',
  especialidad: 'Pediatría',
  telefono: '8290000000',
  email: 'ana@example.com'
});

pacienteId = pacienteRes.insertedId.toString();
doctorId = doctorRes.insertedId.toString();
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Cita API', () => {
  let citaId: string;

  it('debería crear una nueva cita', async () => {
    const res = await request(app).post('/api/citas').send({
      pacienteId,
      doctorId,
      fecha: '2025-04-15T10:00:00.000Z',
      motivo: 'Chequeo general'
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    citaId = res.body._id;
  });

  it('debería obtener todas las citas', async () => {
    const res = await request(app).get('/api/citas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('debería obtener una cita por ID', async () => {
    const res = await request(app).get(`/api/citas/${citaId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body._id).toBe(citaId);
  });

  it('debería actualizar una cita', async () => {
    const res = await request(app).put(`/api/citas/${citaId}`).send({
      motivo: 'Cambio de motivo'
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.motivo).toBe('Cambio de motivo');
  });

  it('debería eliminar una cita', async () => {
    const res = await request(app).delete(`/api/citas/${citaId}`);
    expect(res.statusCode).toBe(204);
  });
});
