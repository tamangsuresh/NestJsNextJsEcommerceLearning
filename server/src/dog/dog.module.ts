import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';
import { Dog, DogSchema } from './schema/dog.schema';

@Module({
  imports: [MongooseModule.forFeature([{ "name": Dog.name, "schema": DogSchema }])],
  providers: [DogService, DogResolver]
})
export class DogModule { }
