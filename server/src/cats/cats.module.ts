import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cat.resolvers';
import { Cat, CatSchema } from './cats.schema';
import { CatsService } from './cats.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
    providers: [CatsResolver, CatsService],
})
export class CatsModule { }
