import { SQLiteRepository } from "../../repositories/implementations/SQLiteRepository";
import { CreateSessionUseCase } from "./CreateSessionUseCase";
import { CreateSessionController } from "./CreateSessionController";

const repository = new SQLiteRepository();
const sessionUseCase = new CreateSessionUseCase(repository);
const sessionController = new CreateSessionController(sessionUseCase);

export { sessionController };