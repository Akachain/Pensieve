import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class PeersController {
  @Get(':channel_genesis_hash')
  getPeers(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to fetch all Installed/instantiated chaincodes');
  }
}
