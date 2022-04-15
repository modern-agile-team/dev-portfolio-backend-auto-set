import { Channel } from './channel.interface';
import { UserInfo } from './userInfo.interface';

export interface Contact {
  contact: {
    no: number;
    title: string;
    subTitle: string;
    buttonText: string;
    channels: Channel[];
    userInfos: UserInfo[];
  };
}
