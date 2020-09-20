class Client {
  public id!: number;
  public name!: string;
  public whatsapp!: string;

  constructor(props: Client) {
    Object.assign(this, props);
  }
}

export { Client };