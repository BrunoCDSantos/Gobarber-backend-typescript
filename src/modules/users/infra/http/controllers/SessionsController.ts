import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateAuthenticationUser from '@modules/users/services/CreateAuthenticationUserService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticationUser = container.resolve(CreateAuthenticationUser);

    const auth = await authenticationUser.execute({
      email,
      password,
    });

    return response.json(auth);
  }
}
