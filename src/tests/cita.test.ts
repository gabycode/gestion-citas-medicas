import request from 'supertest';
import app from '../interfaces/http/server';
import { AppDataSource } from '../infrastructure/database/datasource';

beforeAll(async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
});

afterAll(async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy();
  }
});

describe('POST /citas', () => {
  it('debería crear una cita', async () => {
    const res = await request(app)
      .post('/citas')
      .send({
        pacienteId: '123',
        doctorId: '456',
        fecha: new Date().toISOString(),
        motivo: 'Consulta de prueba'
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.motivo).toBe('Consulta de prueba');
  });

  it('debería fallar sin datos', async () => {
    const res = await request(app).post('/citas').send({});
    expect(res.status).toBe(400);
  });
});
