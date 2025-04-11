import { Router } from 'express';
import { PacienteController } from '../controllers/PacienteController';

const router = Router();

router.post('/', PacienteController.crear);
router.get('/', PacienteController.listar);
router.get('/:id', PacienteController.obtenerPorId);
router.put('/:id', PacienteController.actualizar);
router.delete('/:id', PacienteController.eliminar);

export default router;
