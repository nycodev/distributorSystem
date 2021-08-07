import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class EmployeeDto {
    @ApiProperty()
    @IsString()
    name: string
    @ApiProperty()
    @IsString()
    role: string
    @ApiProperty()
    @IsString()
    email: string
    @ApiProperty()
    @IsString()
    password: string

}