import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type DogDocument = Dog & Document

@Schema()
export class Dog {
    @Prop()
    @Field()
    name: string

    @Prop()
    @Field()
    age: number

    @Prop()
    @Field()
    breed: string
}

export const DogSchema = SchemaFactory.createForClass(Dog)