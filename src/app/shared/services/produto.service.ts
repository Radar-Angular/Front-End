import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SortingInterface } from '../interface/sorting.interface';
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
        let produtos:Produto[] = await firstValueFrom(this.http.get<Produto[]>(`${this.apiUrl}/produtos/all`))
        return produtos
      }

      public async getProdutoById(id:number) : Promise<Produto>{
        return await firstValueFrom(this.http.get<Produto>(`${this.apiUrl}/produtos/${id}`))
      }

      public async getProdutoByNome(nome: string) : Promise<Produto>{
        return await firstValueFrom(this.http.get<Produto>(`${this.apiUrl}/produtos/nome/${nome}`))
      }

      public async postProduto(produto: Produto): Promise<Produto>{
        let produtoRest:Produto = await firstValueFrom(this.http.post<Produto>(`${this.apiUrl}/produtos`,produto))
        return produtoRest
      }

      public async putProduto(produto: Produto): Promise<Produto>{
        let produtoRest:Produto = await firstValueFrom(this.http.put<Produto>(`${this.apiUrl}/produtos`, produto))
        return produtoRest
      }


      public deleteProdutoById(id:number){
        firstValueFrom(this.http.delete(`${this.apiUrl}/produtos/${id}`))
      }

      public getProdutosLista(
        sorting: SortingInterface,
        searchValue: string
      ): Observable<Produto[]> {
        const url = `http://localhost:4200/produtos?_sort=${sorting.column}&_order=${sorting.order}`;
        return this.http.get<Produto[]>(url);
      }

}
