import 'reflect-metadata';
import dotenv from 'dotenv';
import app from './interfaces/http/server';
import { AppDataSource } from './infrastructure/database/datasource';
import logger from './infrastructure/logger/PinoLogger';

// Cargar variables de entorno
dotenv.config();

// Puerto con fallback por defecto
const PORT = process.env.PORT || 3030;

(async () => {
  try {
    logger.info('⏳ Iniciando servidor...');

    // Inicializar conexión a la base de datos
    await AppDataSource.initialize();
    logger.info('✅ Conectado exitosamente a MongoDB');

    // Iniciar servidor HTTP
    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error('❌ Error al iniciar la aplicación:', error);
    process.exit(1); // Salida con error
  }
})();
