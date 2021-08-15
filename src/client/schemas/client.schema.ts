import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = ClientEntity & Document;

@Schema()
export class ClientEntity {
  @Prop()
  cnpj: number;
  @Prop()
  address: string;
}

export const ClientSchema = SchemaFactory.createForClass(ClientEntity);
