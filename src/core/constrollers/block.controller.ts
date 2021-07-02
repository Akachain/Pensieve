import { Controller, Get, Param } from '@nestjs/common';

@Controller('block')
export class BlockController {
  @Get(':channel_genesis_hash/:number')
  getBlocks(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('number') number: number) {
    console.log('Query to fetch block details');
  }

  @Get('transaction/:channel_genesis_hash/:number')
  getBlockTransactions(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('number') number: number) {
    console.log('Query to Fetch Block Transactions');
  }
}

@Controller('blockActivity')
export class BlockActivityController {
  @Get(':channel_genesis_hash')
  getBlockActivity(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to fetch BlockActivity List')
  }
}

@Controller('blockAndTxList')
export class BlockAndTxListController {
  @Get(':channel_genesis_hash/:number')
  getBlockAndTxList(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('number') number: number) {
    console.log('Query to fetch blocks and transaction list');
  }
}

@Controller('blocksByMinute')
export class BlocksByMinuteController {
  @Get(':channel_genesis_hash/:hours')
  getBlkByMin(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('hours') hours: number) {
    console.log('Query to fetch blocks and transaction list');
  }
}

@Controller('blocksByHour')
export class BlocksByHourController {
  @Get(':channel_genesis_hash/:hours')
  getBlocksByHour(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('hours') hours: number) {
    console.log('Query to fetch blocks and transaction list');
  }
}