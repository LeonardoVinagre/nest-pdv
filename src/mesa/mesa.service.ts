import { Injectable } from '@nestjs/common';
import { TestScheduler } from 'rxjs/testing';
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class MesaService {

    public async addCart(nome: String, quantidade: number, tipoProduto: String) {
        const mesaRef = database.collection('Mesa').doc('Mesa1');
        const mesaDoc = await mesaRef.get();
        
        let pedidos = mesaDoc.data().pedidos;

  
        const valorProdutoREF = database.collection('Cardapio').doc('Produtos').collection(tipoProduto).doc(nome);
        const snapshot = await valorProdutoREF.get();
        const valorProdAdicionado = snapshot.data().valor;

        console.log(valorProdAdicionado);
        
        

        var cart = {
            pedidos:pedidos
        }
        var novoPedido = {
            nome: nome,
            quantidade: quantidade,
            valor: valorProdAdicionado
        }
        cart.pedidos.push(novoPedido);
        
        mesaRef.set(cart, {merge: true});

        mesaRef.update({
            valorTotal: mesaDoc.data().valorTotal + valorProdAdicionado
        })
        

        return cart;
    }
}
