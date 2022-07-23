import { RowDataPacket } from 'mysql2';
import mysqlPool from '../config/db';

interface HeaderDto extends RowDataPacket {
  id: number;
  logoUrl: string;
  logoImageUrl: string;
  title: string;
}

class HeaderRepository {
  constructor() {}

  async getHeader(): Promise<HeaderDto | Error> {
    let conn;
    try {
      conn = await mysqlPool.getConnection();

      const query = 'select * from headers where header_id = 1';

      const [row] = await mysqlPool.execute<HeaderDto[]>(query);

      return row[0];
    } catch (error) {
      throw new Error('error!');
    } finally {
      conn?.release();
    }
  }
}

export default HeaderRepository;
