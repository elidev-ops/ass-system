import { connection as knex } from '../../database/connection'; 
import { IClientRepository } from "../IClientRepository";
import { Client } from "../../entities/Client";

export class SQLiteRepositoryClient implements IClientRepository {
  async save(client: Client): Promise<void> {
    await knex('clients').insert(client);
  }

  async findClient(id: number, user_id: string): Promise<Client> {
    const client = await knex('clients')
      .where({ id, user_id })
      .select('*')
      .first();

    return client;
  }

  async listAllClient(id: string): Promise<Client[]> {
    const clients = await knex('clients')
      .where({ user_id: id })
      .select('*');
    return clients;
  }

  async listOneClient(id: number, user_id: string): Promise<Client> {
    const client = await knex('clients')
      .where({ id, user_id })
      .select('*')
      .first();

    return client;
  }

  async updateClient(client: Client, id: number): Promise<void> {
    await knex('clients').where({ id }).update(client);
  }

  async deleteClient(id: number): Promise<void> {
    await knex('clients').where({ id }).delete();
  }
}