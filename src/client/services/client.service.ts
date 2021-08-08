import { Injectable } from '@nestjs/common';
import { ClientDto } from '../dto/client-dto';

@Injectable()
export class ClientService {
  async create(clientDto: ClientDto): Promise<ClientDto> {
    return clientDto
  }

  async findAll(): Promise<ClientDto[]>{
    return
  }

  async findOne(id: string): Promise<ClientDto> {
    return
  }

  async update(id: string, clientDto: ClientDto): Promise<ClientDto> {
    return
  }

  async remove(id: string): Promise<void> {
    
  }
}
