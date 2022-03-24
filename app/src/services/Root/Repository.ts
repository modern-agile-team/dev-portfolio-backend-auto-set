import { publicdb } from '../../config/mariadb';

export default class Repository {
  private pool;

  constructor() {
    this.pool = publicdb.getConnection();
  }

  async init(): Promise<void> {
    await this.pool;
  }

  static async build(): Promise<any> {
    const repository = new Repository();
    await repository.init();
    return repository;
  }

  async releaseConnection(): Promise<void> {
    (await this.pool).release();
  }
}
