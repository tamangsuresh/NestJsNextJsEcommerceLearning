import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type GoatDocument = Goat & Document
@Schema()
export class Goat {
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
export const GoatSchema = SchemaFactory.createForClass(Goat)