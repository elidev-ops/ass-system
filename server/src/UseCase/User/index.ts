import { SQLiteRepository } from "../../repositories/implementations/SQLiteRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const repository = new SQLiteRepository();
const userUseCase = new CreateUserUseCase(repository);
const userController = new CreateUserController(userUseCase);

export { userController };