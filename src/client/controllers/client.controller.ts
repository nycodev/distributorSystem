import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { create } from 'domain';
import { ClientDto } from '../dto/client-dto';
import { ClientService } from '../services/client.service';

@Controller('clients')
export class ClientController {
  constructor(private clientService: ClientService) {}


  @Post()
  async create(@Body() clientDto: ClientDto): Promise<ClientDto[]> {
    const clientDtoResponse: any = await this.clientService.create(clientDto)
    return clientDtoResponse
  }

  @Get()
  async findAll(): Promise<ClientDto[]> {
    const clientDtoResponse = await this.clientService.findAll()
    return clientDtoResponse
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ClientDto> {
    const clientDtoResponse = await this.clientService.findOne(id)
    return clientDtoResponse
  }

  @Patch('id')
  async update(@Param('id') id: string, @Body() ClientDto: ClientDto): Promise<ClientDto> {
    await this.clientService.update(id, ClientDto)
    return
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.clientService.remove(id)
  }
}  