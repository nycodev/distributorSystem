import { Injectable } from '@nestjs/common';
import { EmployeeDto } from '../dto/employee-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeEntity, EmployeeDocument } from './../schemas/employee.schema';
import { UpdateEmployeeDto } from '../dto/update-employee-dto';

@Injectable()
export class EmployeeService {
  constructor(@InjectModel(EmployeeEntity.name) private employeeModel: Model<EmployeeDocument>) { }

  async create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    return new this.employeeModel(employeeDto).save()
  }

  async findAll(): Promise<EmployeeEntity[]> {
    const result = this.employeeModel.find()
    // if (!result) {
    //   throw new HttpException("NOT FOUND", HttpStatus.NOT_FOUND)
    // }
    return result
  }

  async findOne(id: string): Promise<EmployeeEntity> {
    return this.employeeModel.findById(id);
  }

  async update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeEntity> {
    return this.employeeModel.findOneAndUpdate({ _id: id }, updateEmployeeDto);
  }

  async remove(id: string): Promise<any> {

    return await this.employeeModel.findOneAndRemove({ _id: id });
  }

}
