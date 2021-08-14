import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductDto } from '../dto/product-dto';
import { ProductService } from '../services/product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async create(@Body() productDto: ProductDto): Promise<ProductDto[]> {
    const productDtoResponse: any = await this.productService.create(
      productDto,
    );
    return productDtoResponse;
  }

  @Get()
  async findAll(): Promise<ProductDto[]> {
    const productDtoResponse = await this.productService.findAll();
    return productDtoResponse;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<ProductDto> {
    const productDtoResponse = await this.productService.findOne(id);
    return productDtoResponse;
  }

  @Patch('id')
  async update(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Promise<ProductDto> {
    await this.productService.update(id, productDto);
    return;
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.productService.remove(id);
  }
}
