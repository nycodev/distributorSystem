import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StorageController } from './controllers/storage.controller';
import { StorageEntity, StorageSchema } from './schemas/storage.schema';
import { StorageService } from './services/storage.service';
@Module({
    imports: [
        MongooseModule.forFeature([
            { name: StorageEntity.name, schema: StorageSchema},
        ]),
    ],
    controllers: [StorageController],
    providers: [StorageService],
})
export class StorageModule { }