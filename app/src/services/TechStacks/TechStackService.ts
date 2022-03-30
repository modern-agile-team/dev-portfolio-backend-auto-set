import { RequiredRequestError } from '../../common/errors/400-error';
import { Request } from 'express';

interface Query {
  keyword: string;
}

export default class TachStackService {
  private techStackRepository: any;
  private query: any;

  constructor(readonly req: Request, techStackRepository: any) {
    this.query = req.query;
    this.techStackRepository = techStackRepository;
  }

  async findAllByKeyword() {
    // const { keyword } = this.query;
    let keyword;
    if (keyword === undefined) {
      throw new RequiredRequestError('keyword');
      // return { success: false, msg: 'keyword is undefined' };
    }
    const tachStacks: [] = await this.techStackRepository.findAllByKeyword();
    this.techStackRepository.release();

    if (!tachStacks.length) {
      throw new Error(`There aren't tachstacks you finded`);
      // return { success: false, msg: `There aren't tachstacks you finded` };
    }

    return { success: true, tachStacks };
  }
}
