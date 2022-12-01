import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    idCliente: Number
    valor_total: number,
    data: Date

}
