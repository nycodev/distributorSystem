import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class SupplierDto {
    @ApiProperty()
    @IsString()
    name: string
    @ApiProperty()
    @IsNumber()
    CNPJ: number
    @ApiProperty()
    @IsString()
    address: string
}