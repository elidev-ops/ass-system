import { ProductControllers } from './../../controllers/ProductControllers';
import { CreateProductUseCase } from './services/CreateProductUseCase';
import { SQLiteRepositoryProduct } from "../../repositories/implementations/SQLiteRepositoryProduct";
import { ListProductUseCase } from './services/ListProductsUseCase';
import { ShowProductUseCase } from './services/ShowProductUseCase';
import { UpdateProductUseCase } from './services/UpdateProductUseCase';
import { DeleteProductUseCase } from './services/DeleteProductUseCase';

const repository = new SQLiteRepositoryProduct();
const createProductUseCase = new CreateProductUseCase(repository);
const listProductUseCase = new ListProductUseCase(repository);
const showProductUseCase = new ShowProductUseCase(repository);
const updateProductUseCase = new UpdateProductUseCase(repository);
const deleteProductUseCase = new DeleteProductUseCase(repository);
const productController = new ProductControllers(
  createProductUseCase,
  listProductUseCase,
  showProductUseCase,
  updateProductUseCase,
  deleteProductUseCase
);

export { productController };