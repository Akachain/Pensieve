import { Controller, Get, Param } from '@nestjs/common';

@Controller('transaction')
export class TransactionController {
  @Get(':channel_genesis_hash/:txid')
  getTransactionById(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('txid') txid: string) {
    console.log('Query to fetch transactions by txId')
  }
}

@Controller('txList')
export class TxListController {
  @Get(':channel_genesis_hash/:number/:txid')
  getTransactionList() {
    console.log('Query to get transaction List');
  }
}

@Controller('txByMinute')
export class TxByMinuteController {
  @Get(':channel_genesis_hash/:hour')
  getTransactionByMin(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('hour') hour: number) {
    console.log('Query to fetch transaction by minute list');
  }
}

@Controller('txByHour')
export class TxByHourController {
  @Get(':channel_genesis_hash/:days')
  getTransactionByMin(@Param('channel_genesis_hash') channel_genesis_hash: string, @Param('days') days: number) {
    console.log('Query to fetch blocks and transaction list');
  }
}

@Controller('txByOrg')
export class TxByOrgController {
  @Get(':channel_genesis_hash')
  getTransByOrg(@Param('channel_genesis_hash') channel_genesis_hash: string) {
    console.log('Query to fetch blocks and transaction list');
  }
}