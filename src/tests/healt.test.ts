import request from 'supertest';
import app from '../interfaces/http/server';

describe('GET /api/health', () => {
  it('debería devolver status OK', async () => {
    const res = await request(app).get('/api/health');
    expect(res.statusCode).toBe(200);
  });
});
