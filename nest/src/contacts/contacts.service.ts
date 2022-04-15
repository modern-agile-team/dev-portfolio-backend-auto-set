import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from './entities/contact.entity';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactsService {
  private contact: Contact; // readonly
  constructor(
    @InjectRepository(ContactEntity)
    private contactsRepository: Repository<ContactEntity>,
  ) {}

  // TODO: Update type to Contact
  async findOneByNo(no: number): Promise<ContactEntity> {
    this.contact = {
      contact: {
        no,
        title: 'Hello my name is woorim park',
        subTitle: '연락을 원하신다면 아래 버튼을 눌러주세요.',
        buttonText: 'Send e-mail',
        channels: [
          {
            no: 1,
            name: 'naverBlog',
            logoUrl: 'sleif23ldiesi',
          },
          {
            no: 2,
            name: 'instagram',
            logoUrl: 'woefij232lis',
          },
        ],
        userInfos: [
          {
            no: 1,
            title: '주소',
            description: '서울특별시 광진구 ㅇㅇ동',
          },
          {
            no: 2,
            title: '연락처',
            description: '01012341234',
          },
        ],
      },
    };
    const contact = await this.contactsRepository.findOne({ where: { no } });
    if (!contact) throw new NotFoundException();

    return contact; // TODO: Update type to Contact
  }
}
