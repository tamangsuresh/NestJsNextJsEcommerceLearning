import { Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type MobileDocument = Mobile & Document
@Schema()
export class Mobile {
    @Field()
    @Prop()
    name: string

    @Field()
    @Prop()
    age: number

    @Field()
    @Prop()
    type: string

}

export const MobileSchema = SchemaFactory.createForClass(Mobile)