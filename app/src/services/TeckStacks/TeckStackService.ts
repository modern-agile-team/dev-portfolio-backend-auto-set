// eslint-disable-next-line max-classes-per-file
import { Request } from 'express';

interface Query {
  keyword: string;
}

export default class TackStackService {
  private teckStackRepository: any;

  query: any;

  constructor(readonly req: Request, teckStackRepository: any) {
    this.query = req.query;
    this.teckStackRepository = teckStackRepository;
  }

  async findAllByKeyword() {
    const { keyword } = this.query;

    if (keyword === undefined) {
      throw new Error('keyword is undefined');
      // return { success: false, msg: 'keyword is undefined' };
    }
    const tackStacks: [] = await this.teckStackRepository.findAllByKeyword();

    if (!tackStacks.length) {
      throw new Error(`There aren't tackstacks you finded`);
      // return { success: false, msg: `There aren't tackstacks you finded` };
    }

    return { success: true, tackStacks };
  }
}
