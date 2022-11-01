import { Injectable } from '@nestjs/common';
import { LANCHES } from './lanche.mock';
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class LancheService {
    private lanches = LANCHES;
    

    public async getLanches(){
        const lanchesRef = database.collection('lanches').orderBy("id");
    const lanchesDoc = await lanchesRef.get();

    const lanches = [];

    lanchesDoc.forEach(doc => lanches.push(doc.data()))
    return lanches;
    }
}
