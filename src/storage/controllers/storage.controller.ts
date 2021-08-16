import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { StorageDto } from '../dto/storage-dto';
import { StorageService } from '../services/storage.service';

@Controller()
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post()
  async create(@Body() storageDto: StorageDto): Promise<StorageDto[]> {
    const storageDtoResponse: any = await this.storageService.create(
      storageDto,
    );
    return storageDtoResponse;
  }

  @Get()
  async findAll(): Promise<StorageDto[]> {
    const storageDtoResponse = await this.storageService.findAll();
    return storageDtoResponse;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<StorageDto> {
    const storageDtoResponse = await this.storageService.findOne(id);
    return storageDtoResponse;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() storageDto: StorageDto,
  ): Promise<StorageDto> {
    await this.storageService.update(id, storageDto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.storageService.remove(id);
  }
}