import { Module } from '@nestjs/common';
import { MobileService } from './mobile.service';
import { MobileResolver } from './mobile.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Mobile, MobileSchema } from './mobile.schema';

@Module({
  imports: [MongooseModule.forFeature([{ "name": Mobile.name, "schema": MobileSchema }])],
  providers: [MobileService, MobileResolver]
})
export class MobileModule { }
