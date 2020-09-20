import { Client } from "../entities/Client";

export interface IClientRepository {
  save(client: Client): Promise<void>;
  findClient(id: number, user_id: string): Promise<Client>;
  listAllClient(user_id: string): Promise<Client[]>;
  listOneClient(id: number, user_id: string): Promise<Client>;
  updateClient(client: Client, id: number): Promise<void>;
  deleteClient(id: number): Promise<void>;
}