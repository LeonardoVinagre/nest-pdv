import { Controller, Get, Param, Post } from '@nestjs/common';
import { MesaService } from './mesa.service';

@Controller('mesa')
export class MesaController {

    constructor(private mesaService: MesaService) {}

    @Get()
    async addCart() {
        return this.mesaService.addCart('Coca-Cola',2,'Bebidas');
    }
}
