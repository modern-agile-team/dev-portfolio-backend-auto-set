import { VisitorCmtDto, VisitorCmtEntity } from '../apis/visitor/dto';
import VisitorRepository from '../model/visitorRepository';
import bcrypt from 'bcrypt';
import { ServerError } from './error';

class Visitor {
  private readonly visitorRepository: VisitorRepository;
  readonly body;
  constructor(visitorRepository: VisitorRepository, body: any) {
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

  async createComment() {
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

  async updateCommentById(commentId: number) {
    const { password, description, date }: VisitorCmtDto = this.body;
  }
}
export default Visitor;
function randomBytesPromise(arg0: number) {
  throw new Error('Function not implemented.');
}
