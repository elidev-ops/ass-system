import { ICreateClientRequestDTO } from './../DTOS/CreateClientRequestDTO';
import { IClientRepository } from "../../../repositories/IClientRepository";

export class UpdateClientUseCase {
  constructor(
    private clientRepository: IClientRepository
  ) {}
  async execute(data: ICreateClientRequestDTO, id: number) {
    const clientExists = await this.clientRepository.findClient(id, data.user_id);
    if(!clientExists) {
      throw new Error('Client not found.');
    }
    await this.clientRepository.updateClient(data, id);
  }
}