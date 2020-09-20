import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../../../entities/Product";

export class ShowProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(user_id: string, id: number) {
    const productData = await this.productRepository.showProduct(user_id, id);
    const product = new Product(productData);
    return product;
  }
}