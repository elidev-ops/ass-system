import { v4 } from 'uuid';

class User {
  public readonly id!: string;
  public name!: string;
  public email!: string;
  public whatsapp!: string;
  public uf!: string;
  public city!: string;
  public address!: string;
  public password!: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);
    if(!id) {
      this.id = v4();
    }
  }
}

export { User };