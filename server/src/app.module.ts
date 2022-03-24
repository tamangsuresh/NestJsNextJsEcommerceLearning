import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { DogModule } from './dog/dog.module';
import { GoatModule } from './goat/goat.module';
import { BallModule } from './ball/ball.module';
import { MobileModule } from './mobile/mobile.module';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    DogModule,
    GoatModule,
    BallModule,
    MobileModule
  ]
})
export class AppModule { }
