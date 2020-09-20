import { User } from "../entities/User";
import { Client } from "../entities/Client";
interface a {
  save(client: Client): Promise<void>;
}
export interface IUserRepository {
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<any>;
  login(user: User): Promise<User>;
}
