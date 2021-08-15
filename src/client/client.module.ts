
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientController } from './controllers/client.controller';
import { ClientEntity, ClientSchema } from './schemas/client.schema';
import { ClientService } from './services/client.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: ClientEntity.name, schema: ClientSchema },
        ]),
    ],
    controllers: [ClientController],
    providers: [ClientService],
})
export class ClientModule { }
