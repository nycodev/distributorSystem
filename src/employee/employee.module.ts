
import { Module } from '@nestjs/common';
import { EmployeeController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { EmployeeEntity, EmployeeSchema } from './schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [MongooseModule.forFeature([{ name: EmployeeEntity.name, schema: EmployeeSchema }])],
    controllers: [EmployeeController],
    providers: [EmployeeService],
})
export class EmployeeModule { }
