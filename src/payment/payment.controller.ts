import { Controller, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) {}

    @Get()
    async getCardapio(@Query('valor') valor: number) {
        return this.paymentService.pix(valor);
    }
}
