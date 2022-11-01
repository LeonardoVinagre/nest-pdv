import { Controller, Get } from '@nestjs/common';
import { json } from 'stream/consumers';
import { AppService } from './app.service';
const db = require('./firestore/firestoreprovider');


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<any> {
    const lanchesRef = db.collection('lanches').orderBy("id");
    const lanchesDoc = await lanchesRef.get();

    const lanches = [];

    lanchesDoc.forEach(doc => lanches.push(doc.data()))
    return lanches;
  }
}
