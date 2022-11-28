import { Injectable } from '@nestjs/common';
import { database } from '../firestore/firestoreprovider';
import { getHeapCodeStatistics } from 'v8';
import { doc } from 'prettier';

@Injectable()
export class CardapioService {

    public async getCardapio(){
        const bebidasRef = database.collection('Cardapio').doc('Produtos').collection('Bebidas');
        const lanchesRef = database.collection('Cardapio').doc('Produtos').collection('Lanches');
        const bebidasDoc = await bebidasRef.get();
        const lanchesDoc = await lanchesRef.get();

        const cardapio = [{
            Bebidas: [

            ],     
            Lanches: [

            ]
        }];
        
        bebidasDoc.forEach(doc => cardapio[0].Bebidas.push({ id: doc.id, ...doc.data() }))
        lanchesDoc.forEach(doc => cardapio[0].Lanches.push({ id: doc.id, ...doc.data() }))
        console.log(cardapio[0])
        return cardapio;
    }
}


