import { Injectable } from '@nestjs/common';
import { firestore } from 'firebase-admin';
import { first, skip } from 'rxjs';
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

    public async getCart() {
        const mesaRef = database.collection('Mesa').doc('Mesa1');
        const mesaDoc = await mesaRef.get();
        
        var pedidos = [
              
            
        ];
        
        
        // pedidos.push(teste);
        console.log(pedidos.length);
        
        for(let i = 0 ; i < mesaDoc.data().pedidos.length ; i++ ) {

            var aux = 0;
            let prod;
            if( i == 0 ) {
                prod = {
                    nome: mesaDoc.data().pedidos[i].nome,
                    quantidade: parseInt(mesaDoc.data().pedidos[i].quantidade),
                    valor: mesaDoc.data().pedidos[i].valor
                }
                pedidos.push(prod);
                continue;
            }

            for( let j = 0 ; j < pedidos.length ; j++ ) {
                if(pedidos[j].nome == mesaDoc.data().pedidos[i].nome){
                    pedidos[j].quantidade = parseInt(pedidos[j].quantidade)+parseInt(mesaDoc.data().pedidos[i].quantidade);
                    pedidos[j].valor = pedidos[j].valor+mesaDoc.data().pedidos[i].valor;
                    pedidos[j].valor.toFixed(2);
                    aux = 1;
                    break;
                }
                
            }
            if(aux == 0) {
                prod = {
                    nome: mesaDoc.data().pedidos[i].nome,
                    quantidade: parseInt(mesaDoc.data().pedidos[i].quantidade),
                    valor: mesaDoc.data().pedidos[i].valor
                }
                pedidos.push(prod);
                
            }
            
        }
        var valorTotal = 0;
        pedidos.forEach(el => {
            valorTotal += el.valor;
        })
        valorTotal = +valorTotal.toFixed(2)

        let prod = {
            valorTotal: valorTotal
        }
        pedidos.push(prod);
        return (pedidos)
    }

    public async deleteItens() {
        const mesaRef = database.collection('Mesa').doc('Mesa1');
        const mesaDoc = await mesaRef.get();

        let removeItens = mesaDoc.update({
            pedidos: firestore.FieldValue.delete()
        })
        return 'Pedidos deletados'
    }
}

//490642ad-752b-4be4-929e-d8031ba2d8e6