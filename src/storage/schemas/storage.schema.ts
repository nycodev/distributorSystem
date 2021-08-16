import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StorageDocument = StorageEntity & Document;

@Schema()
export class StorageEntity {
  @Prop()
  street: string;
  @Prop()
  floor: number;
  @Prop()
  apartment: number;
}

export const StorageSchema = SchemaFactory.createForClass(StorageEntity);





