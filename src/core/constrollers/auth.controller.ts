import { Controller, Get, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    console.log('Login');
  }

  @Get('networklist')
  getNetworkList() {
    console.log('Query to get networklist');
  }
}

@Controller('register')
export class RegisterController {
  @Post()
  register() {
    console.log('Register');
  }
}

@Controller('unregister')
export class UnregisterController {
  @Post()
  unregister() {
    console.log('UnRegister')
  }
}
