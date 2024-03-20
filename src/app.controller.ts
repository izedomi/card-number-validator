import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBadRequestResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { CardNumberDto } from './dto/card-number.dto';

@Controller("verifyCardNumber")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @ApiCreatedResponse({description: "Card number verified"})
  @ApiBadRequestResponse({description: "Bad Request"})
  getHello(@Body() dto: CardNumberDto): any {
    return this.appService.validateCardNumber(dto.cardNumber);
  }
}
