import { Module } from '@nestjs/common';

import { CardapioModule } from './cardapio/cardapio.module';
import { MesaModule } from './mesa/mesa.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [CardapioModule, MesaModule, PaymentModule],
  controllers: [PaymentController],
  providers: [PaymentService],

})
export class AppModule {}

