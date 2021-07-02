import { Controller, Get, Param } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
  @Get()
  fetchChannel() {
    console.log('Query to fetch channels');
  }

  @Get('info')
  fetchChannelInfo() {
    console.log('Query to fetch channels info');
  }
}

@Controller('changeChannel')
export class ChangeChannelController {
  @Get(':channel_genesis_hash')
  getChangeChannel(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to Change the Channel');
    console.log(`${channel_genesis_hash}`);
  }
}

@Controller('curChannel')
export class CurChannelController {
  @Get()
  getCurrentChannel() {
    console.log('Query to get Current Channel');
  }
}

@Controller('status')
export class StatusController {
  @Get(':channel_genesis_hash')
  getStatusByHash(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to get Count of all Channel details');
    console.log(`${channel_genesis_hash}`);
  }
}
