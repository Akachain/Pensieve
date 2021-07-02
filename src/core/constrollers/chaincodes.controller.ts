import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class ChaincodesController {
  @Get(':channel_genesis_hash')
  getChaincode(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to fetch all Installed/instantiated chaincodes');
    console.log(`${channel_genesis_hash}`);
  }
}
