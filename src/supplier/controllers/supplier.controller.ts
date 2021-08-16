import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SupplierDto } from "../dto/supplier-dto";
import { SupplierService } from "../services/supplier.service";

@Controller('suppliers')
export class SupplierController {
  constructor(private supplierService: SupplierService) {}

  @Post()
  async create(@Body() supplierDto: SupplierDto): Promise<SupplierDto[]> {
    const supplierDtoResponse: any = await this.supplierService.create(
      supplierDto,
    );
    return supplierDtoResponse;
  }

  @Get()
  async findAll(): Promise<SupplierDto[]> {
    const supplierDtoResponse = await this.supplierService.findAll();
    return supplierDtoResponse;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SupplierDto> {
    const supplierDtoResponse = await this.supplierService.findOne(id);
    return supplierDtoResponse;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() supplierDto: SupplierDto,
  ): Promise<SupplierDto> {
    await this.supplierService.update(id, supplierDto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return await this.supplierService.remove(id);
  }
}
