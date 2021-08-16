import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplierController } from './controllers/supplier.controller';
import { SupplierEntity, SupplierSchema } from './schemas/supplier.schema';
import { SupplierService } from './services/supplier.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: SupplierEntity.name, schema: SupplierSchema },
        ]),
    ],
    controllers: [SupplierController],
    providers: [SupplierService],
})
export class SupplierModule { }
