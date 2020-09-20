import { CreateClientUseCase } from "./services/CreateClientUseCase";
import { ClientControllers } from "../../controllers/ClientControllers";
import { ListClientsUseCase } from "./services/ListClientsUseCase";
import { SQLiteRepositoryClient } from "../../repositories/implementations/SQLiteRepositoryClient";
import { ShowClientUseCase } from "./services/ShowClientUseCase";
import { UpdateClientUseCase } from "./services/UpdateClientUseCase";
import { DeleteClientUseCase } from "./services/DeleteClientUseCase";


const repository = new SQLiteRepositoryClient();
const clientUseCase = new CreateClientUseCase(repository);
const listClientUseCase = new ListClientsUseCase(repository)
const showClientUseCase = new ShowClientUseCase(repository);
const updateClientUseCase = new UpdateClientUseCase(repository);
const deleteClientUseCase = new DeleteClientUseCase(repository);
const clientController = new ClientControllers(
  clientUseCase, 
  listClientUseCase, 
  showClientUseCase, 
  updateClientUseCase,
  deleteClientUseCase
  );

export { clientController };
