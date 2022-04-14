import { Injectable } from '@nestjs/common';
import { Contact } from './interfaces/contact.interface';

@Injectable()
export class ContactService {
  private contact: Contact; // readonly

  findOneById(id: number): Contact {
    this.contact = {
      contact: {
        num: id,
        title: 'Hello my name is woorim park',
        subTitle: '연락을 원하신다면 아래 버튼을 눌러주세요.',
        buttonText: 'Send e-mail',
        channels: [
          {
            num: 1,
            name: 'naverBlog',
            logoUrl: 'sleif23ldiesi',
          },
          {
            num: 2,
            name: 'instagram',
            logoUrl: 'woefij232lis',
          },
        ],
        userInfos: [
          {
            num: 1,
            title: '주소',
            description: '서울특별시 광진구 ㅇㅇ동',
          },
          {
            num: 2,
            title: '연락처',
            description: '01012341234',
          },
        ],
      },
    };
    return this.contact;
  }
}
