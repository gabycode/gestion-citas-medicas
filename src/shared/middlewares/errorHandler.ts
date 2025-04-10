import { Request, Response, NextFunction } from 'express';
import pino from 'pino';

const logger = pino();

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Loguear el error (completo si estás en desarrollo)
  logger.error({
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    path: req.path,
    method: req.method
  });

  // Error personalizado con código y mensaje
  if (err.statusCode && err.message) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Errores por validación (por ejemplo, de DTOs en el futuro)
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }

  // Error desconocido
  return res.status(500).json({ error: 'Internal Server Error' });
}
