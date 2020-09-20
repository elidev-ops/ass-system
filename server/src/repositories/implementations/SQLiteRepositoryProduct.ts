import { connection as knex } from '../../database/connection'; 
import { IProductRepository } from "../IProductRepository";
import { Product } from "../../entities/Product";
import getDate from '../../util/getDate';

export class SQLiteRepositoryProduct implements IProductRepository {
  async save(product: Product): Promise<void> {
    await knex('products').insert(product);
  }

  async findProduct(user_id: string, id: number): Promise<Product> {
    const product = await knex('products')
      .where({ user_id, id })
      .select('*')
      .first();
    
    return product;
  }

  async listProducts(user_id: string): Promise<Product[]> {
    const products = await knex('products').where({ user_id }).select('*');
    return products;
  }

  async showProduct(user_id: string, id: number): Promise<Product> {
    const product = await knex('products')
      .where({ user_id, id })
      .select('*')
      .first();

    return product;
  }

  async updateProduct(id: number, product: Product): Promise<void> {
    await knex('products').where({ id }).update({ ...product, updated_at: getDate() });
  }

  async deleteProduct(id: number): Promise<void> {
    await knex('products').where({ id }).delete();
  }
}