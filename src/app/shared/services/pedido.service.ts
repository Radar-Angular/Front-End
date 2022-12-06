import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl


    public async getPedidos():Promise<Pedido[]> {
      let pedidos:Pedido[] = await firstValueFrom(this.http.get<Pedido[]>(`${this.apiUrl}/pedidos/all`))
      return pedidos
    }

    public async getPedidoById(id:number) : Promise<Pedido>{
      return await firstValueFrom(this.http.get<Pedido>(`${this.apiUrl}/pedidos/${id}`))
    }

    public async getPedidoByNome(nome: string) : Promise<Pedido>{
      return await firstValueFrom(this.http.get<Pedido>(`${this.apiUrl}/pedidos/${nome}`))
    }

    public async postPedido(pedido: Pedido): Promise<Pedido>{
      let pedidoRest:Pedido = await firstValueFrom(this.http.post<Pedido>(`${this.apiUrl}/pedidos/`,pedido))
      return pedidoRest
    }

    public async putPedido(pedido: Pedido): Promise<Pedido>{
      let PedidoRest:Pedido = await firstValueFrom(this.http.post<Pedido>(`${this.apiUrl}/pedidos/`, pedido))
      return PedidoRest
    }

    public deletePedidoById(id:number){
      firstValueFrom(this.http.delete(`${this.apiUrl}/pedidos/${id}`))
    }


}
