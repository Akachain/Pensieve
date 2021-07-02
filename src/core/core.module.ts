import { Module } from '@nestjs/common';
import { UsersController } from './constrollers/users.controller';
import { UserService } from './services/user.service';
import { PeersController } from './constrollers/peers.controller';
import { TransactionController } from './constrollers/transaction.controller';
import { BlockController } from './constrollers/block.controller';
import { UserlistController } from './constrollers/user.controller';
import { AuthController } from './constrollers/auth.controller';
import { ChaincodesController } from './constrollers/chaincodes.controller';
import { ChannelsController } from './constrollers/channels.controller';

@Module({
    imports: [],
    controllers: [
        UsersController,
        PeersController,
        TransactionController,
        BlockController,
        UserlistController,
        AuthController,
        ChaincodesController,
        ChannelsController,
    ],
    providers: [UserService],
})
export class CoreModule { }
