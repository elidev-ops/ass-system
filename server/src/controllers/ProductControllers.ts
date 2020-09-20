import { Request, Response } from 'express';

import { CreateProductUseCase } from "../UseCase/Product/services/CreateProductUseCase";
import { ListProductUseCase } from '../UseCase/Product/services/ListProductsUseCase';
import { ShowProductUseCase } from '../UseCase/Product/services/ShowProductUseCase';
import { UpdateProductUseCase } from '../UseCase/Product/services/UpdateProductUseCase';
import { DeleteProductUseCase } from '../UseCase/Product/services/DeleteProductUseCase';

export class ProductControllers {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private listProductUseCase: ListProductUseCase,
    private showProductUseCase: ShowProductUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase
  ) {}
  
  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    try {
      await this.createProductUseCase.execute({ ...request.body,  user_id });
      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
  async list(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;

    try {
      const products = await this.listProductUseCase.execute(user_id);
      return response.json(products);
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const { id } = request.params;

    try {
      const product = await this.showProductUseCase.execute(user_id, Number(id));
      return response.json(product);
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const { id } = request.params;

    try {
      await this.updateProductUseCase.execute({ ...request.body, user_id }, Number(id));
      return response.status(201).send();
    } catch (error) {
      return response.status(500).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }

  async delete(request: Request, response: Response): Promise<Response> {
    const { user_id } = request;
    const { id } = request.params;

    try {
      await this.deleteProductUseCase.execute(user_id, Number(id));
      return response.status(204).send();
    } catch (error) {
      return response.status(404).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}