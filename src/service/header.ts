import HeaderRepository from '../model/headerRepository';
import { Request } from 'express';

class Header {
  readonly req: Request;
  private readonly headerRepository: HeaderRepository;
  constructor(headerRepository: HeaderRepository, req: Request) {
    this.headerRepository = headerRepository;
    this.req = req;
  }

  async getHeader() {
    const header = await this.headerRepository.getHeader();

    return header;
  }
}

export default Header;
