export interface Header {
  no: number;
  title: string;
  logoUrl: string;
  channels: Channel;
}

interface Channel {
  channel: Array<{ no: number; name: string; url: string; headerNo: number }>;
}
