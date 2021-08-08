import { ClientService } from './client/services/client.service';
import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    EmployeeModule,],
  controllers: [],
  providers: [
    ClientService,],
})
export class AppModule { }
