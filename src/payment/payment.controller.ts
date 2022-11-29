import { Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) {}

    @Post()
    async getCardapio(@Query('valor') valor: number) {
        return this.paymentService.pix(valor);
    }
}
