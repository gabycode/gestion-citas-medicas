import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/gestion-citas');
    console.log('📦 Conectado a MongoDB');
  } catch (error) {
    console.error('❌ Error conectando a MongoDB', error);
    process.exit(1);
  }
};


