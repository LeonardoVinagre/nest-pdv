import { Controller, Get } from '@nestjs/common';
import { CardapioService } from './cardapio.service';

@Controller('cardapio')
export class CardapioController {
    
    constructor(private cardapioService: CardapioService) {}

    @Get()
    async getCardapio() {
        return this.cardapioService.getCardapio();
    }
}
