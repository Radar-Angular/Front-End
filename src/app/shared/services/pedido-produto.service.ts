import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pedido } from '../models/pedido';
import { PedidoProduto } from '../models/pedido-produto';

@Injectable({
  providedIn: 'root'
})
export class PedidoProdutoService {

 
  constructor(private http: HttpClient) { }

  apiUrl = environment.apiUrl


    public async getPedidosProdutos():Promise<PedidoProduto[]> {
      let pedidos:PedidoProduto[] = await firstValueFrom(this.http.get<PedidoProduto[]>(`${this.apiUrl}/pedidoProdutos`))
      return pedidos
    }
    

   
    public async getPedidoById(id:number) : Promise<PedidoProduto>{
      return await firstValueFrom(this.http.get<PedidoProduto>(`${this.apiUrl}/pedidoProdutos/${id}`))
    }


    public async getPedidoByNome(nome: string) : Promise<PedidoProduto>{
      return await firstValueFrom(this.http.get<PedidoProduto>(`${this.apiUrl}/pedidoProdutos/${nome}`))
    }

    public async postPedidoProduto(pedidoProduto: PedidoProduto): Promise<PedidoProduto>{
      let pedidoProdutoRest:PedidoProduto = await firstValueFrom(this.http.post<PedidoProduto>(`${this.apiUrl}/pedidoProdutos/`,pedidoProduto))
      return pedidoProdutoRest
    }

    public async putPedidoProduto(pedidoProduto: PedidoProduto): Promise<PedidoProduto>{
      let pedidoProdutoRest:PedidoProduto = await firstValueFrom(this.http.post<PedidoProduto>(`${this.apiUrl}/pedidoProdutos/`, pedidoProduto))
      return pedidoProdutoRest
    }

    public deleteClienteById(id:number){
      firstValueFrom(this.http.delete(`${this.apiUrl}/pedidoProdutos/${id}`))
    }


}