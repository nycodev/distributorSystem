import { StorageModule } from './storage/storage.module';
import { SupplierModule } from './supplier/supplier.module';
import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    StorageModule,
    SupplierModule,
    ProductModule,
    MongooseModule.forRoot('mongodb+srv://DB:teste123@cluster0.igzt0.mongodb.net/Cluster0?retryWrites=true&w=majority'),
    ClientModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
