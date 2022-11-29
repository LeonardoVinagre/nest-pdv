import { Injectable } from '@nestjs/common';
import { Pix } from "faz-um-pix"

@Injectable()
export class PaymentService {

    public async pix(chave: string, nome: string, cidade: string, valor: number, codPedido: string) {
        const code = await Pix(chave,nome,chave,valor,codPedido, true)
        const myQrCode = code.substring(22, code.length)
        return myQrCode;
    }
}
