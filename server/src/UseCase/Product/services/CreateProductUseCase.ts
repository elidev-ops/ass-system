import { IProductRequestDTO } from './../DTOS/IProductRequestDTO';
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from '../../../entities/Product';

export class CreateProductUseCase {
  constructor(
    private productRepository: IProductRepository
  ) {}

  async execute(data: IProductRequestDTO) {
    const product = new Product(data);
    await this.productRepository.save(product);
  }
}