import { Product } from "../entities/Product";

export interface IProductRepository {
  save(product: Product): Promise<void>;
  findProduct(user_id: string, id: number): Promise<Product>;
  listProducts(user_id: string): Promise<Product[]>;
  showProduct(user_id: string, id: number): Promise<Product>;
  updateProduct(id: number, product: Product): Promise<void>;
  deleteProduct(id: number): Promise<void>;
}