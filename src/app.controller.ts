import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("verifyCardNumber")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() cardNumber: any): any {
    return this.appService.validateCardNumber(cardNumber.cardNumber);
  }
}
