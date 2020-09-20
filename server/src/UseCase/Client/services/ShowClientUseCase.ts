import { IClientRepository } from "../../../repositories/IClientRepository";
import { Client } from "../../../entities/Client";

export class ShowClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute(id: number, user_id: string) {
    const clientResponse = await this.clientRepository.listOneClient(id, user_id);
    const client = new Client(clientResponse);
    return client;
  }
}