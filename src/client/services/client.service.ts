import { Injectable } from '@nestjs/common';
import { ClientDto } from '../dto/client-dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClientEntity, ClientDocument } from './../schemas/client.schema';
import { UpdateClientDto } from '../dto/update-client-dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(ClientEntity.name)
    private clientModel: Model<ClientDocument>,
  ) {}

  async create(clientDto: ClientDto): Promise<ClientEntity> {
    return new this.clientModel(ClientDto).save();
  }

  async findAll(): Promise<ClientEntity[]> {
    const result = this.clientModel.find();
    return result;
  }

  async findOne(id: string): Promise<ClientEntity> {
    return this.clientModel.findById(id);
  }

  async update(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<ClientEntity> {
    return this.clientModel.findOneAndUpdate({ _id: id }, updateClientDto);
  }

  async remove(id: string): Promise<any> {
    return await this.clientModel.findOneAndRemove({ _id: id });
  }
}
