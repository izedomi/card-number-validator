import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  validateCardNumber(cardNumber: string): any {

    try{
      let digitSum: number = 0;
      for (let i = cardNumber.length - 1; i > -1; i = i - 2) {
  
        //digits NOT multiplied  by 2
        digitSum += Number(cardNumber.charAt(i))
  
        //Multiply every 2nd digit by 2 starting from 
        //the 2nd to last and then add those digits together
        if(i - 1 >= 0){
          const val = Number(cardNumber.charAt(i - 1)) * 2
  
          digitSum += val % 10;
  
          if(val > 9){
            digitSum += Math.floor(val / 10)
          }
        }
  
      }
      return {
        "cardNumber": cardNumber,
        "isValid": digitSum == 0 ? false : digitSum % 10 == 0
      }
     
    }
    catch(e){
      throw new BadRequestException();
    }
  }
}
