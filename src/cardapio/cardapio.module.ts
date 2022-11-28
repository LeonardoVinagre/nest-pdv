import { Module } from '@nestjs/common';
import { CardapioController } from './cardapio.controller';
import { CardapioService } from './cardapio.service';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService]
})
export class CardapioModule {}
