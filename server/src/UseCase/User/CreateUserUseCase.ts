import { ICreateUserRequestDTO } from './CreateUserRequestDTO';
import { IUserRepository } from './../../repositories/IUserRepository';
import { User } from '../../entities/User';

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const emailAlreadyExistis = await this.userRepository.findByEmail(data.email);

    if(emailAlreadyExistis) {
      throw new Error(`Email ${emailAlreadyExistis.email} already exists.`);
    }

    const user = new User(data);

    const resCratedUser = this.userRepository.save(user);
    
    return resCratedUser;
  }
}

export { CreateUserUseCase };