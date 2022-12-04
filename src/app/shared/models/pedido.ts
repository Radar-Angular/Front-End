import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    valorTotal: number,
    data: Date,
    idCliente: number
}
