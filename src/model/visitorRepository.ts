import { OkPacket, RowDataPacket } from 'mysql2';
import db from '../config/db';
import { ServerError } from '../service/error';

interface VisitorDto extends RowDataPacket {
  visitorCount: number;
}

class VisitorRepository {
  async getVisitorCnt(): Promise<VisitorDto | Error> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = 'SELECT count as visitorCount FROM number_of_visitors';

      const [rows] = await conn.execute<VisitorDto[]>(query);

      return rows[0];
    } catch (error) {
      throw new ServerError('INTERNAL SERVER ERROR!');
    } finally {
      conn?.release();
    }
  }

  async updateVisitorCnt(): Promise<number | Error> {
    let conn;
    try {
      conn = await db.getConnection();

      const query =
        'UPDATE number_of_visitors SET count = count + 1 WHERE visitor_id = ';

      const [row] = await conn.execute<OkPacket>(query);

      return row.affectedRows;
    } catch (error) {
      throw new ServerError('INTERNAL SERVER ERROR!');
    } finally {
      conn?.release();
    }
  }
}

export default VisitorRepository;
