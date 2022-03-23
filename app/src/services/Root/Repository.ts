import { publicdb } from '../../config/mariadb';

export default class Repository {
  private pool;

  constructor() {
    this.pool = publicdb.getConnection();
  }

  async releaseConnection(): Promise<void> {
    (await this.pool).release();
  }
}
