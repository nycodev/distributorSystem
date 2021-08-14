import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    MongooseModule.forRoot('mongodb://localhost:27017/distributor'),
    ClientModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
