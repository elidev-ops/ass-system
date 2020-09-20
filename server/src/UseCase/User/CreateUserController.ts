import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(
    private userUseCase: CreateUserUseCase
  ) {}

  async handler(request: Request, response: Response): Promise<Response> {
    try {
      const userCreateResponse = await this.userUseCase.execute(request.body);
      return response.json(userCreateResponse);
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      });
    }

    
  }
}

export { CreateUserController };