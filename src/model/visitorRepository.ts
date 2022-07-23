import { RowDataPacket } from 'mysql2';
import db from '../config/db';

interface VisitorDto extends RowDataPacket {
  visitorCount: number;
}

class VisitorRepository {
  async getVisitors(): Promise<VisitorDto | Error> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = 'SELECT count as visitorCount FROM number_of_visitors';

      const [rows] = await conn.execute<VisitorDto[]>(query);

      return rows[0];
    } catch (error) {
      throw new Error('INTERNAL SERVER ERROR!');
    } finally {
      conn?.release();
    }
  }
}

export default VisitorRepository;
