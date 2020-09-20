import { IClientRepository } from './../../../repositories/IClientRepository';
import { ICreateClientRequestDTO } from '../DTOS/CreateClientRequestDTO';
import { Client } from '../../../entities/Client';

class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute(data: ICreateClientRequestDTO) {
    const client = new Client(data);
    await this.clientRepository.save(client);
  }
}

export { CreateClientUseCase };