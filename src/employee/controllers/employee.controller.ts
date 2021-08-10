import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { EmployeeDto } from '../dto/employee-dto';
import { EmployeeService } from '../services/employee.service';


@Controller('employees')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) { }

  @Post()
  async create(@Body() employeeDto: EmployeeDto): Promise<EmployeeDto[]> {
    const employeeDtoResponse: any = await this.employeeService.create(employeeDto)
    return employeeDtoResponse
  }

  @Get()
  async findAll(): Promise<EmployeeDto[]> {
    const employeeDtoResponse = await this.employeeService.findAll()
    return employeeDtoResponse
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EmployeeDto> {
    const employeeDtoResponse = await this.employeeService.findOne(id)
    return employeeDtoResponse
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() employeeDto: EmployeeDto): Promise<EmployeeDto> {
    await this.employeeService.update(id, employeeDto)
    return
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.employeeService.remove(id)

  }
}


