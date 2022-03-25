import { Request } from 'express';

export default class TackStackService {
  private teckStackRepository: any;
  query: {};

  constructor(readonly req: Request, teckStackRepository: any) {
    this.query = req.query;
    this.teckStackRepository = teckStackRepository;
  }

  async findAllByKeyword() {
  }
}