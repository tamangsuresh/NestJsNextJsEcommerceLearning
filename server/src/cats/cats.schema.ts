import { Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Cat & Document;

@Schema()
export class Cat {
    @Prop()
    @Field()
    name: string;

    @Prop()
    @Field()
    age: number;

    @Prop()
    @Field()
    breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);