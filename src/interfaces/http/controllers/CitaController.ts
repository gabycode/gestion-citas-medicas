// import { Request, Response } from 'express';
// import { CrearCita } from '../../../application/use-cases/CrearCita';
// import { CitaMongoRepository } from '../../../infrastructure/database/repositories/CitaMongoRepository';

// const citaRepo = new CitaMongoRepository();
// const crearCitaUseCase = new CrearCita(citaRepo);

// export class CitaController {
//   async crear(req: Request, res: Response) {
//     try {
//       const data = req.body;
//       const cita = await crearCitaUseCase.ejecutar(data);
//       return res.status(201).json(cita);
//     } catch (error) {
//       return res.status(500).json({ message: 'Error al crear cita' });
//     }
//   }

