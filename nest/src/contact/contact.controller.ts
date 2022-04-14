import { Controller, Get, Param } from '@nestjs/common';

const res = {
  contact: {
    num: 1,
    title: '안녕하세요 백엔드 개발자 ㅇㅇㅇ입니다.',
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
    userInfo: [
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

@Controller('contact')
export class ContactController {
  @Get(':id')
  findOneById(@Param('id') id: number) {
    return res;
  }
}
