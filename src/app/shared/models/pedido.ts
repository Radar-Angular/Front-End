import { Cliente } from "./cliente";


export interface Pedido {
    id: number,
    cliente?: Cliente | null,
    valor_total: number,
    data: Date

}
