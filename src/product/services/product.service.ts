import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductDocument,
  ProductEntity,
} from 'src/client/schemas/product.schema';
import { ProductDto } from '../dto/product-dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductEntity.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async create(productDto: ProductDto): Promise<ProductEntity> {
    return new this.productModel(productDto).save();
  }

  async findAll(): Promise<ProductDto[]> {
    return;
  }

  async findOne(id: string): Promise<ProductDto> {
    return;
  }

  async update(id: string, productDto: ProductDto): Promise<ProductDto> {
    return;
  }

  async remove(id: string): Promise<void> {}
}
