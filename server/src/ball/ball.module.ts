import { Module } from '@nestjs/common';
import { BallService } from './ball.service';
import { BallResolver } from './ball.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Ball, BallSchema } from './ball.schema';

@Module({
  imports: [MongooseModule.forFeature([{ "name": Ball.name, "schema": BallSchema }])],
  providers: [BallService, BallResolver]
})
export class BallModule { }
