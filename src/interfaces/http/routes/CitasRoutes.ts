import { Router } from 'express';
import { CitaController } from '../controllers/CitaController';

const router = Router();

router.post('/', CitaController.crear);
router.get('/', CitaController.listar);
router.get('/:id', CitaController.obtenerPorId);
router.put('/:id', CitaController.actualizar);
router.delete('/:id', CitaController.eliminar);

export default router;
