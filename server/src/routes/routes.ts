import { Router, request, response } from 'express';
import { userController } from '../UseCase/User';
import { sessionController } from '../UseCase/Session';
import authMiddleware from '../auth';
import { clientController } from '../UseCase/Client';
import { productController } from '../UseCase/Product';

const routes = Router();
// User
routes.post('/users', (request, response) => userController.handler(request, response));
// Client
routes.post('/clients', authMiddleware, (request, response) => clientController.save(request, response));
routes.get('/clients', authMiddleware, (request, response) => clientController.list(request, response));
routes.get('/clients/:id', authMiddleware, (request, response) => clientController.show(request, response));
routes.put('/clients/:id', authMiddleware, (request, response) => clientController.update(request, response));
routes.delete('/clients/:id', authMiddleware, (request, response) => clientController.delete(request, response));
// Product
routes.post('/products', authMiddleware, (request, response) => productController.create(request, response));
routes.get('/products', authMiddleware, (request, response) => productController.list(request, response));
routes.get('/products/:id', authMiddleware, (request, response) => productController.show(request, response));
routes.put('/products/:id', authMiddleware, (request, response) => productController.update(request, response));
routes.delete('/products/:id', authMiddleware, (request, response) => productController.delete(request, response));
// Rotas de Autenticação
routes.post('/v1/auth/login', (request, response) => sessionController.handler(request, response));
routes.post('/v1/auth/logout', (request, response) => {
  return response.json({ auth: false, token: null });
});

export { routes };