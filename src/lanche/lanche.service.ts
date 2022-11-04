import { Injectable } from '@nestjs/common';
import { LANCHES } from './lanche.mock';
import { database } from '../firestore/firestoreprovider';
import { getHeapCodeStatistics } from 'v8';
import { doc } from 'prettier';

@Injectable()
export class LancheService {
    private lanches = LANCHES;
    

    public async getLanches(){
        const cardapioRef = database.collection('Cardapio');
        const cardapioDoc = await cardapioRef.get();

        const cardapio = [];

        cardapioDoc.forEach(doc => cardapio.push({ id: doc.id, ...doc.data() }))
        return cardapio;
    }
}


