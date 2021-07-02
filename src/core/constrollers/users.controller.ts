import { Body, Controller, ForbiddenException, Param, Get, Post, UseFilters, ParseIntPipe, HttpStatus, UsePipes, UseInterceptors } from '@nestjs/common';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { CreateUserDto } from '../dtos/requests/user/create-user.request';
import { AllExceptionsFilter } from '../exceptions/exception.filter';
import { User } from '../interfaces/user.interface';
import { UserService } from '../services/user.service';

@Controller('users')
export class UsersController {

  constructor(private userService: UserService) { }

  @Post()
  create(@Body() request: CreateUserDto) {
    this.userService.create(request);
  }

  @UseFilters(AllExceptionsFilter)
  @Get(':id')
  findUser(@Param('id', new ParseIntPipe()) id: number): string {
    return `get user ${id}`;
  }

  // @Get('error')
  // // @UseFilters(AllExceptionsFilter)
  // async getError() {
  //   throw new ForbiddenException();
  // }

  @Get()
  async getUserlist(): Promise<User[]> {
    return this.userService.findAll();
  }

}

