import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductDocument,
  ProductEntity,
} from 'src/product/schemas/product.schema';
import { ProductDto } from '../dto/product-dto';
import { UpdateProductDto } from '../dto/update-product-dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(ProductEntity.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async create(productDto: ProductDto): Promise<ProductEntity> {
    return new this.productModel(productDto).save();
  }

  async findAll(): Promise<ProductEntity[]> {
    const result = this.productModel.find();
    return result;
  }

  async findOne(id: string): Promise<ProductEntity> {
    return this.productModel.findById(id);
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.productModel.findOneAndUpdate({ _id: id }, updateProductDto);
  }

  async remove(id: string): Promise<any> {
    return await this.productModel.findOneAndRemove({ _id: id });
  }
}
