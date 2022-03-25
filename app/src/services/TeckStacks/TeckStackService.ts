import { Request } from 'express';

interface Query {
  keyword: string
}

export default class TackStackService {
  private teckStackRepository: any;
  query: any;

  constructor(readonly req: Request, teckStackRepository: any) {
    this.query = req.query;
    this.teckStackRepository = teckStackRepository;
  }

  async findAllByKeyword() {
      const keyword: Query = this.query.keyword;
  }
}