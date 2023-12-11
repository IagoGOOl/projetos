import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { AutheController } from '../controller/AuthController';
import { AuthMiddliwares } from '../middlewares/AuthMiddliwares';

const userController = new UserController();
const autheController = new AutheController();
export const router = Router();

router.post('/create', userController.criando);
router.get('/users', AuthMiddliwares, userController.index);
router.post('/auth', autheController.autheticate);
