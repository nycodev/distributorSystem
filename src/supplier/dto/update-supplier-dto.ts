import { PartialType } from '@nestjs/mapped-types';
import { SupplierDto } from './supplier-dto';

export class UpdateSupplierDto extends PartialType(SupplierDto) { }