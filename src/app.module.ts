import { ClientService } from './client/services/client.service';
import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';


@Module({
  imports: [ClientModule,
    EmployeeModule,],
  controllers: [],
  providers: [
    ClientService,],
})
export class AppModule { }
