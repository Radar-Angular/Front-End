import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }


    public async  getProdutos() : Promise<Produto[]>{
        let produtos:Produto[] = await firstValueFrom(this.http.get<Produto[]>(`${this.apiUrl}/produtos`))
        return produtos
      }

      public async getProdutoById(id:number) : Promise<Produto>{
        return await firstValueFrom(this.http.get<Produto>(`${this.apiUrl}/produto/${id}`))
      }

      public async getProdutoByNome(nome: string) : Promise<Produto>{
        return await firstValueFrom(this.http.get<Produto>(`${this.apiUrl}/produtos/${nome}`))
      }

      public async postProduto(produto: Produto): Promise<Produto>{
        let produtoRest:Produto = await firstValueFrom(this.http.post<Produto>(`${this.apiUrl}/produto`,produto))
        return produtoRest
      }

      public async putProduto(produto: Produto): Promise<Produto>{
        let produtoRest:Produto = await firstValueFrom(this.http.post<Produto>(`${this.apiUrl}/produto/${produto.id}`, produto))
        return produtoRest
      }


      public deleteClienteById(id:number){
        firstValueFrom(this.http.delete(`${this.apiUrl}/produto/${id}`))
      }

}
