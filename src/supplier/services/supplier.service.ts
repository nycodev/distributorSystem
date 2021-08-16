import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SupplierDocument, SupplierEntity } from '../schemas/supplier.schema';
import { SupplierDto } from '../dto/supplier-dto';
import { UpdateSupplierDto } from '../dto/update-supplier-dto';

@Injectable()
export class SupplierService {
  constructor(
    @InjectModel(SupplierEntity.name)
    private supplierModel: Model<SupplierDocument>,
  ) {}

  async create(supplierDto: SupplierDto): Promise<SupplierEntity> {
    return new this.supplierModel(supplierDto).save();
  }

  async findAll(): Promise<SupplierEntity[]> {
    const result = this.supplierModel.find();
    return result;
  }

  async findOne(id: string): Promise<SupplierEntity> {
    return this.supplierModel.findById(id);
  }

  async update(
    id: string,
    updateSupplierDto: UpdateSupplierDto,
  ): Promise<SupplierEntity> {
    return this.supplierModel.findOneAndUpdate({ _id: id }, updateSupplierDto);
  }

  async remove(id: string): Promise<any> {
    return await this.supplierModel.findOneAndRemove({ _id: id });
  }
}
