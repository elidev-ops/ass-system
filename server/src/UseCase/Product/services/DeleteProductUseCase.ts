import { IProductRepository } from "../../../repositories/IProductRepository";

export class DeleteProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(user_id: string, id: number) {
    const productExists = await this.productRepository.findProduct(user_id, id);
    if(!productExists) {
      throw new Error('Product not found.');
    }
    await this.productRepository.deleteProduct(id);
  }
}