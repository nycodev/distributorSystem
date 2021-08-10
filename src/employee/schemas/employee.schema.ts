import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = EmployeeEntity & Document;

@Schema()
export class EmployeeEntity {
    @Prop()
    name: string
    @Prop()
    role: string
    @Prop()
    email: string
    @Prop()
    password: string
}

export const EmployeeSchema = SchemaFactory.createForClass(EmployeeEntity);