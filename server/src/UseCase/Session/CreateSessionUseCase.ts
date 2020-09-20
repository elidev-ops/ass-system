import jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();

import { IUserRepository } from './../../repositories/IUserRepository';
import { ICreateUserRequestDTO } from './../User/CreateUserRequestDTO';
import { User } from '../../entities/User';

class CreateSessionUseCase {
  private secret: any;
  constructor(
    private sessionRepository: IUserRepository
  ) {
    this.secret = process.env.SECRET_KEY;
  }

  async execute(data: ICreateUserRequestDTO) {
    const user = new User(data);
    const logon = await this.sessionRepository.login(user);

    if(!logon) {
      throw new Error('Usuário ou senha incorretos');
    }
    const { id, name, email } = logon;
    const token = jwt.sign({ id }, this.secret, {
      expiresIn: '7d'
    })

    return { name, email, auth: true, token };
  }
}

export { CreateSessionUseCase };