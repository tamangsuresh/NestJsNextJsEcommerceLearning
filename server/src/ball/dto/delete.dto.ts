import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class DeleteBallDto {
    @Field()
    data: string
}