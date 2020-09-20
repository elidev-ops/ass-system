import { Request, Response } from 'express';
import { CreateSessionUseCase } from './CreateSessionUseCase';

class CreateSessionController {
  constructor(
    private sessionUseCase: CreateSessionUseCase
  ) {}
  
  async handler(request: Request, response: Response): Promise<Response> {
   try {
     const logon = await this.sessionUseCase.execute(request.body);
     return response.json(logon);
   } catch (error) {
     return response.status(500).json({
       message: error.message || 'Unexpected error.'
     });
   }
  }
};

export { CreateSessionController };