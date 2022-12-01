import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    idCliente?: Cliente | null,
    valor_total: number,
    data: Date

}
