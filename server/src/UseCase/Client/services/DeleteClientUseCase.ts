import { IClientRepository } from "../../../repositories/IClientRepository";

export class DeleteClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}

  async execute(id: number, user_id: string) {
    const clientExists = await this.clientRepository.findClient(id, user_id);
    if(!clientExists) {
      throw new Error('Client not found.');
    }
    await this.clientRepository.deleteClient(id);
  }
}