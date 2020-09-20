import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../../../entities/Product";

export class ListProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(user_id: string) {
    const productData = await this.productRepository.listProducts(user_id);
    const products = productData.map(product => new Product(product));
    return products;
  }
}