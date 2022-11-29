import { Controller, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) {}

    @Get()
    async getCardapio(@Query('chave') chave: string,
                      @Query('nome') nome: string,
                      @Query('cidade') cidade: string,
                      @Query('valor') valor: number,
                      @Query('codPedido') codPedido: string) {
        return this.paymentService.pix(chave,nome,cidade,valor,codPedido);
    }
}
