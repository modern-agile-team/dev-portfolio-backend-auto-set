export class header {
  title: string;
  logoUrl: string;
  channels: Array<Channel>;
}

interface Channel {
  channel: { name: string; url: string };
}
