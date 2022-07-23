import VisitorRepository from '../model/visitorRepository';
import { Request } from 'express';

class Visitor {
  private readonly visitorRepository: VisitorRepository;
  readonly req: Request;
  constructor(visitorRepository: VisitorRepository, req: Request) {
    this.visitorRepository = visitorRepository;
    this.req = req;
  }

  async getVisitors() {
    const visitorCnt = this.visitorRepository.getVisitors();
    return visitorCnt;
  }
}
export default Visitor;
