import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log(`${Date.now()} - ${req.method} ${req.baseUrl} - ${JSON.stringify(req.body)}`);
    next();
  }
}
