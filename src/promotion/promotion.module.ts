import { Module } from '@nestjs/common';
import { PromotionResolver } from './promotion.resolver';
import { PromotionService } from './promotion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promotion } from '../database/entities/promotion.entity';
import { UserModule } from '../user/user.module';
@Module({
    imports: [TypeOrmModule.forFeature([Promotion]), UserModule],
    providers: [PromotionService, PromotionResolver],
    exports: [PromotionService],
})
export class PromotionModule {}
