import { Router } from 'express';
import { DoctorController } from '../controllers/DoctorController';

const router = Router();

router.post('/', DoctorController.crear);
router.get('/', DoctorController.listar);
router.get('/:id', DoctorController.obtenerPorId);
router.put('/:id', DoctorController.actualizar);
router.delete('/:id', DoctorController.eliminar);

export default router;
