import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    clienteId?: Cliente | null,
    valorTotal: number,
    data: Date

}
