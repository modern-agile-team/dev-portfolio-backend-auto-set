import { publicdb } from '../../config/mariadb';

interface Repository {
  init(): Promise<void>;
  releaseConnection(): Promise<void>;
}

export default class RepositoryImpl implements Repository {
  private pool: any;

  constructor() {
    this.pool = publicdb.getConnection();
  }

  async init(): Promise<void> {
    await this.pool;
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
