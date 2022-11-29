import { Injectable } from '@nestjs/common';
import { database } from '../firestore/firestoreprovider';
import { getHeapCodeStatistics } from 'v8';
import { doc } from 'prettier';

@Injectable()
export class CardapioService {

    public async getCardapio(){
        const ref = database.collection('Cardapio');
        const snapshot = await ref.get();
        
        const docs = snapshot.docs.map((doc) => {
            return ({id:doc.id, ...doc.data()});
        })
        return docs;
    }
}


