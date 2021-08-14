import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductEntity & Document;

@Schema()
export class ProductEntity {
  @Prop()
  supplierId: number;
  @Prop()
  supplierName: string;
  @Prop()
  productName: string;
  @Prop()
  group: string;
  @Prop()
  storageAdress: string;
  @Prop()
  price: number;
  @Prop()
  closedBoxQty: number;
  @Prop()
  localization: string;
  @Prop()
  inStock: number;
}

export const ProductSchema = SchemaFactory.createForClass(ProductEntity);
