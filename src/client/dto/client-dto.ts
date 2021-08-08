import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ClientDto {
  @ApiProperty()
  @IsNumber()
  cnpj: number
  @ApiProperty()
  @IsString()
  adress: string


}