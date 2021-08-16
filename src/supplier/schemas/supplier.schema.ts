import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplierDocument = SupplierEntity & Document;

@Schema()
export class SupplierEntity {
  @Prop()
  name: string;
  @Prop()
  CNPJ: number;
  @Prop()
  address: string;
}

export const SupplierSchema = SchemaFactory.createForClass(SupplierEntity);
