import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Promotion } from '../database/entities/promotion.entity';
import { CreatePromotionInput } from './dto/create-promotion.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';

@Injectable()
export class PromotionService {
    constructor(
        @InjectRepository(Promotion) private promotionRepository: Repository<Promotion>,
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
    ) {}
    async createPromotion(id: string, createPromotionInput: CreatePromotionInput): Promise<Promotion> {
        createPromotionInput.userId = id;
        const newPromotion = this.promotionRepository.create(createPromotionInput);
        await this.promotionRepository.save(newPromotion);
        return newPromotion;
    }
    async findAllPromotion(page: number, pageSize: number): Promise<Promotion[]> {
        const promotion = await this.promotionRepository
            .createQueryBuilder('promotions')
            .take(pageSize)
            .skip(pageSize * (page - 1))
            .getMany();
        return promotion;
    }
}
