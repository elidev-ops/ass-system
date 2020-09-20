import { Request, Response } from 'express';
import { CreateClientUseCase } from '../UseCase/Client/services/CreateClientUseCase';
import { ListClientsUseCase } from '../UseCase/Client/services/ListClientsUseCase';
import { ShowClientUseCase } from '../UseCase/Client/services/ShowClientUseCase';
import { UpdateClientUseCase } from '../UseCase/Client/services/UpdateClientUseCase';
import { DeleteClientUseCase } from '../UseCase/Client/services/DeleteClientUseCase';

class ClientControllers {
  constructor(
    private clientUseCase: CreateClientUseCase,
    private listClientUseCase: ListClientsUseCase,
    private showClientUseCase: ShowClientUseCase,
    private updateClientUseCase: UpdateClientUseCase,
    private deleteClientUseCase: DeleteClientUseCase
  ) {}

  async save(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    await this.clientUseCase.execute({ ...request.body, user_id });
    return response.status(201).send();
  }

  async list(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const clients = await this.listClientUseCase.execute(user_id);
    
    return response.status(200).json(clients);
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user_id } = request;
    const client = await this.showClientUseCase.execute(Number(id), user_id);
    
    return response.status(200).json(client);
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user_id } = request;
    try {
      await this.updateClientUseCase.execute({ ...request.body, user_id }, Number(id));
      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { user_id } = request;

    try {
      await this.deleteClientUseCase.execute(Number(id), user_id);
      return response.status(204).send();
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error'
      });
    }
  }
}

export { ClientControllers };