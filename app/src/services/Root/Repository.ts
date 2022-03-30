import { publicdb } from '../../config/mariadb';

interface Repository {
  init(): Promise<void>;
  releaseConnection(): Promise<void>;
}

export default class RepositoryImpl implements Repository {
  private pool: any;

  constructor() {}

  async init(): Promise<void> {
    console.log(this.pool);
    this.pool = await publicdb.getConnection();
    await this.pool.query('select * from tech_stacks');
    (await this.pool).release();
    console.log(this.pool);
  }

  static async build(): Promise<any> {
    const repository = new this();
    await repository.init();
    return repository;
  }

  async releaseConnection(): Promise<void> {
    (await this.pool).release();
  }
}
