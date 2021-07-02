import { Controller, Get } from '@nestjs/common';

@Controller('userlist')
export class UserlistController {
  @Get()
  userlist() {

  }
}
