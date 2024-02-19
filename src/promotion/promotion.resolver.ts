import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { PromotionService } from './promotion.service';
import { CreatePromotionInput } from './dto/create-promotion.input';
import { Promotion } from '../database/entities/promotion.entity';
import { GqlSuperAdminAuthGuard } from '../shared/guards/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from '../user/user.decorator';
@Resolver(() => Promotion)
export class PromotionResolver {
    constructor(private readonly promotionService: PromotionService) {}

    @UseGuards(GqlSuperAdminAuthGuard)
    @Mutation(() => Promotion, { name: 'createPromotion' })
    async createPromotion(@CurrentUser() user, @Args('data') createPromotion: CreatePromotionInput): Promise<Promotion> {
        return await this.promotionService.createPromotion(user.id, createPromotion);
    }
    @Query(() => [Promotion])
    async getAllPromotion(@Args('page') page: number, @Args('pageSize', { nullable: true }) pageSize: number): Promise<Promotion[]> {
        const newPageSize = pageSize ? pageSize : 10;
        return await this.promotionService.findAllPromotion(page, newPageSize);
    }
}
