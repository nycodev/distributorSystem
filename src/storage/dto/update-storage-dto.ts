import { PartialType } from '@nestjs/mapped-types';
import { StorageDto } from './storage-dto';

export class UpdateStorageDto extends PartialType(StorageDto) { }


