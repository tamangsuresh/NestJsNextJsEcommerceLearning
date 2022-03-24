import { Module } from '@nestjs/common';
import { GoatService } from './goat.service';
import { GoatResolver } from './goat.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Goat, GoatSchema } from './goat.schema';

@Module({
  imports: [MongooseModule.forFeature([{ "name": Goat.name, "schema": GoatSchema }])],
  providers: [GoatService, GoatResolver]
})
export class GoatModule { }
