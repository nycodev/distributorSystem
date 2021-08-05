import { Controller, Get, Post, Query } from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';


@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  @Get()
  async run(@Query() params) {
    const response = await this.employeeService.create(params)
    return response
  }

}
