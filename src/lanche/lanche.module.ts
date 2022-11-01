import { Module } from '@nestjs/common';
import { LancheController } from './lanche.controller';
import { LancheService } from './lanche.service';

@Module({
  controllers: [LancheController],
  providers: [LancheService]
})
export class LancheModule {}
