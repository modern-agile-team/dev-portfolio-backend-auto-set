import { EntityRepository, Repository } from 'typeorm';
import { Channel } from '../entities/channel.entity';
import { Header } from '../entities/header.entity';

@EntityRepository(Channel)
export class ChannelRepository extends Repository<Channel> {
  async createChannel(channels: any[], header: Header): Promise<void> {
    for (let i = 0; i < channels.length; i += 1) {
      const channelInfo = channels[i];
      const channel = new Channel();

      channel.name = channelInfo.name;
      channel.url = channelInfo.url;
      channel.header = header;

      await this.save(channel);
    }
  }
}
