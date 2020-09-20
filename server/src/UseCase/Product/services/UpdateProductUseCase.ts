import { IProductRepository } from "../../../repositories/IProductRepository";
import { IProductRequestDTO } from "../DTOS/IProductRequestDTO";
import { Product } from "../../../entities/Product";

export class UpdateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(data: IProductRequestDTO, id: number) {
    const productExists = await this.productRepository.findProduct(data.user_id, Number(id));
    if(!productExists) {
      throw new Error('Product not found.');
    }
    const product = new Product(data);
    await this.productRepository.updateProduct(id, product);
  }
}