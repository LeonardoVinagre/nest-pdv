import { Injectable } from '@nestjs/common';
import { Pix } from "faz-um-pix"

@Injectable()
export class PaymentService {

    

    public async pix(valor: number) {

        var paymentData = {
            chave: "490642ad-752b-4be4-929e-d8031ba2d8e6",
            nome: "Leonardo Rossi Vinagre",
            cidade: "Capivari",
            codPedido: "#Pedido " + Math.floor(Math.random() * 10000000) + 10000
        }

        const qrCode = await Pix(paymentData.chave,paymentData.nome,paymentData.cidade,valor,paymentData.codPedido, true)
        const pixCode = await Pix(paymentData.chave,paymentData.nome,paymentData.cidade,valor,paymentData.codPedido)
        const myQrCode = qrCode.substring(22, qrCode.length)
        var pixResponse = [myQrCode, pixCode]
        return pixResponse;
    }
}
