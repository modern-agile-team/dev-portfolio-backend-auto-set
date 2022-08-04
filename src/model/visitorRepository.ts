import { OkPacket, ResultSetHeader } from 'mysql2';
import {
  VisitorCmtDto,
  VisitorCmtEntity,
  VisitorDto,
  VisitorPasswordEntity,
} from '../apis/visitor/dto';
import db from '../config/db';
import { ServerError } from '../service/error';

class VisitorRepository {
  async getVisitorCnt(): Promise<VisitorDto | Error> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = 'SELECT count as visitorCount FROM number_of_visitors';

      const [rows] = await conn.execute<VisitorDto[]>(query);

      return rows[0];
    } catch (error) {
      throw new ServerError('Database Error Occurred');
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
      throw new ServerError('Database Error Occurred');
    } finally {
      conn?.release();
    }
  }

  async createComment({
    nickname,
    password,
    description,
    date,
  }: VisitorCmtDto): Promise<number | ServerError> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = `
        INSERT INTO visitor_comments (nickname, password, description, create_date) VALUES (?, ?, ?, ?);`;

      const [row] = await conn.execute<ResultSetHeader>(query, [
        nickname,
        password,
        description,
        date,
      ]);

      return row.affectedRows;
    } catch (error) {
      throw new ServerError('Database Error Occurred');
    } finally {
      conn?.release();
    }
  }

  async getVisitorCommentById(
    visitorCommentId: number
  ): Promise<VisitorCmtEntity> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = `SELECT * FROM visitor_comments WHERE visitor_comment_id=?;`;

      const [row] = await conn.execute<VisitorCmtEntity[]>(query, [
        visitorCommentId,
      ]);

      return row[0];
    } catch (error) {
      throw new ServerError('Database Error Occurred');
    }
  }

  async updateVisitorComment(
    visitorCommentId: number,
    description: string
  ): Promise<number> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = `UPDATE visitor_comments SET description=? WHERE visitor_comment_id=?`;

      const [row] = await conn.execute<OkPacket>(query, [
        description,
        visitorCommentId,
      ]);

      return row.affectedRows;
    } catch (error) {
      throw new ServerError('Database Error Occurred');
    }
  }

  async getVisitorComments(): Promise<VisitorCmtEntity[]> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = `SELECT visitor_comment_id as id, nickname, description, create_date as date FROM visitor_comments;`;

      const [row] = await conn.execute<VisitorCmtEntity[]>(query);

      return row;
    } catch (error) {
      throw new ServerError('Database Error Occurred');
    }
  }

  async deleteVisitorCommentById(id: number): Promise<number> {
    let conn;
    try {
      conn = await db.getConnection();

      const query = 'DELETE FROM visitor_comments WHERE visitor_comment_id=?;';

      const [row] = await conn.execute<OkPacket>(query, [id]);

      return row.affectedRows;
    } catch (error) {
      throw new ServerError('Database Error Occurred');
    }
  }
}

export default VisitorRepository;
