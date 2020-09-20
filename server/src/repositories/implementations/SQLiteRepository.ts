import { IUserRepository } from './../IUserRepository';
import { connection as knex } from '../../database/connection';
import { User } from '../../entities/User';

import cryptPassword from '../../util/criptoPass';

class SQLiteRepository implements IUserRepository {
  // Users
  async findByEmail(email: string): Promise<User> {
    const user = await knex('users').where({ email }).first();
    return user;
  }

  async save(user: User) {
    const passCrypt = cryptPassword(user.password);
    await knex('users').insert({ ...user, password: passCrypt });
    return { name: user.name };
  }

  async login(user: User): Promise<User> {
    const { email, password } = user;
    const passCrypt = cryptPassword(password);
    const userExists = await knex('users')
      .where({ email, password: passCrypt })
      .first();

    return userExists;
  }
}

export { SQLiteRepository };