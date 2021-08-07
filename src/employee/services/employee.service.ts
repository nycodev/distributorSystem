import { Injectable } from '@nestjs/common';
import { EmployeeDto } from '../dto/employee-dto';

@Injectable()
export class EmployeeService {
  async create(employeeDto: EmployeeDto): Promise<EmployeeDto> {
    return employeeDto
  }

  async findAll(): Promise<EmployeeDto[]> {
    return
  }

  async findOne(id: string): Promise<EmployeeDto> {
    return
  }

  async update(id: string, employeeDto: EmployeeDto): Promise<EmployeeDto> {
    return
  }

  async remove(id: string): Promise<void> {

  }

}
