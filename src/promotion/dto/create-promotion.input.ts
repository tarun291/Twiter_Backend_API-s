import { ArgsType, Field, InputType } from '@nestjs/graphql';
@ArgsType()
@InputType()
export class CreatePromotionInput {
    @Field(() => String, { nullable: false })
    subject: string;

    @Field(() => String, { nullable: false })
    html: string;

    @Field(() => String, { nullable: true })
    userId?: string;
}
