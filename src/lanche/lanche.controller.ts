import { Controller, Get } from '@nestjs/common';
import { LancheService } from './lanche.service';

@Controller('lanche')
export class LancheController {
    
    constructor(private lancheService: LancheService) {}

    @Get()
    async getLanches() {
        return this.lancheService.getLanches();
    }
}
