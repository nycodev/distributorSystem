import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StorageDto } from '../dto/storage-dto';
import { UpdateStorageDto } from '../dto/update-storage-dto';
import { StorageDocument, StorageEntity } from '../schemas/storage.schema';

@Injectable()
export class StorageService {  
  constructor(
    @InjectModel(StorageEntity.name)
    private storageModel: Model<StorageDocument>,
  ) {}

  async create(storageDto: StorageDto): Promise<StorageEntity> {
    return new this.storageModel(storageDto).save();
  }

  async findAll(): Promise<StorageEntity[]> {
    const result = this.storageModel.find();
    return result;
  }

  async findOne(id: string): Promise<StorageEntity> {
    return this.storageModel.findById(id);
  }

  async update(
    id: string,
    updateStorageDto: UpdateStorageDto,
  ): Promise<StorageEntity> {
    return this.storageModel.findOneAndUpdate({ _id: id }, updateStorageDto);
  }

  async remove(id: string): Promise<any> {
    return await this.storageModel.findOneAndRemove({ _id: id });
  }

}
