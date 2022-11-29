import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { MesaService } from './mesa.service';

@Controller('mesa')
export class MesaController {

    constructor(private mesaService: MesaService) {}

    @Post()
    addCart(@Query('nome') nome: String,
            @Query('quantidade') quantidade: number,
            @Query('tipoProduto') tipoProduto: String) {
        this.mesaService.addCart(nome, quantidade, tipoProduto);
        return 'Produto adicionado'
    }

    @Get('carrinho')
    getCart() {
        return this.mesaService.getCart();
    }

    @Delete('carrinho')
    deleteItens() {
        return this.mesaService.deleteItens();
    }
}
