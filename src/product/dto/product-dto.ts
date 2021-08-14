import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
export class ProductDto {
  @ApiProperty()
  @IsNumber()
  supplierId: number;
  @ApiProperty()
  @IsString()
  supplierName: string;
  @ApiProperty()
  @IsString()
  productName: string;
  @ApiProperty()
  @IsString()
  group: string;
  @ApiProperty()
  @IsString()
  storageAdress: string;
  @ApiProperty()
  @IsNumber()
  price: number;
  @ApiProperty()
  @IsNumber()
  closedBoxQty: number;
  @ApiProperty()
  @IsString()
  localization: string;
  @ApiProperty()
  @IsNumber()
  inStock: number;
}
