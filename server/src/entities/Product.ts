export class Product {
  public id!: number;
  public brand!: string;
  public model!: string;
  public sn!: string;
  public user_id!: string;
  public client_id!: number;

  constructor(props: Product) {
    Object.assign(this, props);
  }
}