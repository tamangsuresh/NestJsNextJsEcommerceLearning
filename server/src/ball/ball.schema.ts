import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type BallDocument = Ball & Document
@Schema()
export class Ball {
    @Field()
    @Prop()
    name: string

    @Field()
    @Prop()
    age: number


    @Field()
    @Prop()
    breed: string
}

export const BallSchema = SchemaFactory.createForClass(Ball)