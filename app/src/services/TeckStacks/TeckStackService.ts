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
    try {
      const keyword: Query = this.query.keyword;

      if (keyword === undefined) {
        return { success: false, msg: 'keyword is undefined' };
      }
      const tackStacks: [] = await this.teckStackRepository.findAllByKeyword();

      if (!tackStacks.length) {
        return { success: false, msg: `There aren't tackstacks you finded` };
      }

      return { success: true, tackStacks };
    } catch (err) {
      return { isError: true, success: false, msg: err };
    }
  }
}
