import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class StorageDto {
    @ApiProperty()
    @IsString()
    street: string
    @ApiProperty()
    @IsNumber()
    floor: number
    @ApiProperty()
    @IsNumber()
    apartment: number
    }