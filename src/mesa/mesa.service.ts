import { Injectable } from '@nestjs/common';
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class MesaService {

    public async addCart(nome: String, quantidade: number, tipoProduto: String) {
        const mesaRef = database.collection('Mesa').doc('Mesa1');
        const mesaDoc = await mesaRef.get();
        
        let pedidos = mesaDoc.data().pedidos;

        
        const novoItemRef = database.collection('Cardapio').doc(tipoProduto);
        const novoItemDoc = await novoItemRef.get();
        var valorProdAdicionado;
        
        for(let i = 0 ; i < novoItemDoc.data().Itens.length ; i++){
            if(novoItemDoc.data().Itens[i].nome == nome){
                valorProdAdicionado = novoItemDoc.data().Itens[i].price;
            }
        }


        var cart = {
            pedidos:pedidos
        }
        var novoPedido = {
            nome: nome,
            quantidade: quantidade,
            valor: valorProdAdicionado*quantidade
        }
        cart.pedidos.push(novoPedido);
        
        mesaRef.set(cart, {merge: true});

        mesaRef.update({
            valorTotal: mesaDoc.data().valorTotal + valorProdAdicionado*quantidade
        })
        

        return novoPedido;
    }
}
