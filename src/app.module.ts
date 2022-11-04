import { Module } from '@nestjs/common';

import { LancheModule } from './lanche/lanche.module';

@Module({
  imports: [LancheModule],

})
export class AppModule {}

