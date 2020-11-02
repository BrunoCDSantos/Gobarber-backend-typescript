import { Router } from 'express';
import CreateAuthenticationUser from '@modules/users/services/CreateAuthenticationUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticationUser = new CreateAuthenticationUser();

  const auth = await authenticationUser.execute({
    email,
    password,
  });

  return response.json(auth);
});

export default sessionRouter;
