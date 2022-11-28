import { Module } from '@nestjs/common';

import { CardapioModule } from './cardapio/cardapio.module';
import { MesaModule } from './mesa/mesa.module';

@Module({
  imports: [CardapioModule, MesaModule],

})
export class AppModule {}

