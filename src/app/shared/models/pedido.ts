import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    valor_total: number,
    data: Date,
    idCliente: number
}
