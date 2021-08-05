import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    EmployeeModule,],
  controllers: [],
  providers: [],
})
export class AppModule { }
