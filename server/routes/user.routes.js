import { Router } from 'express';
import { UserController } from '../controllers';

const router = Router();

router.post('/api/login', UserController.logIn)
router.get('/profile')

export default router;