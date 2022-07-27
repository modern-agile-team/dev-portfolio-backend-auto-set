import VisitorRepository from '../model/visitorRepository';
import { Request } from 'express';

class Visitor {
  private readonly visitorRepository: VisitorRepository;
  readonly req: Request;
  constructor(visitorRepository: VisitorRepository, req: Request) {
    this.visitorRepository = visitorRepository;
    this.req = req;
  }

  async getVisitorCnt() {
    const visitorCnt = await this.visitorRepository.getVisitorCnt();
    return visitorCnt;
  }

  async updateVisitorCnt() {
    const visitorCnt = await this.visitorRepository.updateVisitorCnt();

    if (visitorCnt) return visitorCnt;
  }
}
export default Visitor;
