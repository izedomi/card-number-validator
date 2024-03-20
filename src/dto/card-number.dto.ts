import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CardNumberDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({type: String, description: "card number"})
    cardNumber: string
    
}