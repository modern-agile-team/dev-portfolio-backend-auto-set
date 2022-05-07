import { EntityRepository, Repository } from 'typeorm';
import { Header } from '../entities/header.entity';

@EntityRepository(Header)
export class HeaderRepository extends Repository<Header> {
  async createHeader(title: string, logoUrl: string): Promise<Header> {
    const header = new Header();

    header.title = title;
    header.logoUrl = logoUrl;

    await this.save(header);

    return header;
  }
}
