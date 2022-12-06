import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, Observable } from 'rxjs';
import { ClientesModule } from 'src/app/area-logada/clientes/clientes.module';
import { environment } from 'src/environments/environment';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  public async getClientes(): Promise<Cliente[]> {
    let clientes: Cliente[] = await firstValueFrom(this.http.get<Cliente[]>(`${this.apiUrl}/clientes/all`))
    return clientes
  }

  // public async getClienteById(id: Number): Promise<Cliente> {
  //   return await firstValueFrom(this.http.get<Cliente>(`${this.apiUrl}/clientes/${id}`))
  // }

  getClienteById(idCliente: any) {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${idCliente}`)
  }

  public async getClienteByNome(nome: string): Promise<Cliente> {
    return await firstValueFrom(this.http.get<Cliente>(`${this.apiUrl}/clientes/${nome}`))
  }

  public async postCliente(cliente: Cliente): Promise<Cliente> {
    let clienteRest: Cliente = await firstValueFrom(this.http.post<Cliente>(`${this.apiUrl}clientes`, cliente))
    return clienteRest
  }

  public async putCliente(cliente: Cliente): Promise<Cliente> {
    let clienteRest: Cliente = await firstValueFrom(this.http.put<Cliente>(`${this.apiUrl}clientes`, cliente))
    return clienteRest
  }


  public deleteClienteById(id: number) {
    firstValueFrom(this.http.delete(`${this.apiUrl}clientes/${id}`))
  }

}