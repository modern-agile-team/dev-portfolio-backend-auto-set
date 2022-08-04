import { VisitorCmtDto, VisitorCmtEntity } from '../apis/visitor/dto';
import VisitorRepository from '../model/visitorRepository';
import bcrypt from 'bcrypt';
import { BadRequestError, ServerError } from './error';

interface Response {
  success: boolean;
  msg: string;
}

class Visitor {
  private readonly visitorRepository: VisitorRepository;
  readonly body;
  constructor(visitorRepository: VisitorRepository, body?: any) {
    this.visitorRepository = visitorRepository;
    this.body = body;
  }

  async getVisitorCnt() {
    const visitorCnt = await this.visitorRepository.getVisitorCnt();
    return visitorCnt;
  }

  async updateVisitorCnt() {
    const visitorCnt = await this.visitorRepository.updateVisitorCnt();

    if (visitorCnt) return visitorCnt;
  }

  async createComment(): Promise<boolean> {
    const { body } = this;
    const encryptedPassword = await this.encryptPassword(body.password);

    const visitorComment: VisitorCmtDto = {
      nickname: body.nickname,
      password: encryptedPassword,
      description: body.description,
      date: body.date,
    };

    const isCreate = await this.visitorRepository.createComment(visitorComment);

    if (isCreate) return true;
    return false;
  }

  private async encryptPassword(password: string): Promise<string> {
    try {
      const saltRounds = 10;

      const encryptedPassword = await bcrypt
        .genSalt(saltRounds)
        .then((salt: string) => {
          return bcrypt.hash(password, salt);
        });

      return encryptedPassword;
    } catch (error) {
      throw new ServerError('Password encryption failed');
    }
  }

  async updateCommentById(visitorCommentId: number): Promise<Response> {
    const { password, description }: VisitorCmtDto = this.body;

    const encryptedPassword =
      await this.visitorRepository.getVisitorCommentById(visitorCommentId);

    if (!encryptedPassword) throw new BadRequestError('No data exists');

    const isSamePassword = await this.comparePassword(
      password,
      encryptedPassword.toString()
    );

    if (!isSamePassword)
      return { success: false, msg: 'Passwords do not match' };

    await this.visitorRepository.updateVisitorComment(
      visitorCommentId,
      description
    );

    return { success: true, msg: 'Visitor comment update complete' };
  }

  private async comparePassword(password: string, encryptedPassword: string) {
    return await bcrypt.compare(password, encryptedPassword);
  }

  async getVisitorComments(): Promise<{ visitorComments: VisitorCmtEntity[] }> {
    const visitorComments = await this.visitorRepository.getVisitorComments();

    return { visitorComments };
  }
}
export default Visitor;
