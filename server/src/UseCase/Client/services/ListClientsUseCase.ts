import { IClientRepository } from "../../../repositories/IClientRepository";
import { Client } from "../../../entities/Client";

export class ListClientsUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}
  
  async execute(id: string) {
    const clientsResponse = await this.clientRepository.listAllClient(id);
    const clients = clientsResponse.map(client => new Client(client));

    return clients;
  }
}