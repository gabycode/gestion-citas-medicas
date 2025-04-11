import dotenv from 'dotenv';
import { app } from './interfaces/http/server';
import logger from './infrastructure/logger/PinoLogger';
import { connectDB } from './infrastructure/database/mongoose/mongoose';

dotenv.config();

const PORT = process.env.PORT || 3030;

(async () => {
  try {
    logger.info('⏳ Iniciando servidor...');

    await connectDB();
    logger.info('✅ Conectado exitosamente a MongoDB');

    app.listen(PORT, () => {
      logger.info(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    logger.error('❌ Error al iniciar la aplicación:', error);
    process.exit(1);
  }
})();
