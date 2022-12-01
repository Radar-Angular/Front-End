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
    let clientes: Cliente[] = await firstValueFrom(this.http.get<Cliente[]>(`${this.apiUrl}/clientes`))
    return clientes
  }

  public async getClienteById(id: Number): Promise<Cliente> {
    return await firstValueFrom(this.http.get<Cliente>(`${this.apiUrl}/cliente/${id}`))
  }

  public async getClienteByNome(nome: string): Promise<Cliente> {
    return await firstValueFrom(this.http.get<Cliente>(`${this.apiUrl}/clientes/${nome}`))
  }

  public async postCliente(cliente: Cliente): Promise<Cliente> {
    let clienteRest: Cliente = await firstValueFrom(this.http.post<Cliente>(`${this.apiUrl}cliente`, cliente))
    return clienteRest
  }

  public async putCliente(cliente: Cliente): Promise<Cliente> {
    let clienteRest: Cliente = await firstValueFrom(this.http.post<Cliente>(`${this.apiUrl}cliente/${cliente.id}`, cliente))
    return clienteRest
  }


  public deleteClienteById(id: number) {
    firstValueFrom(this.http.delete(`${this.apiUrl}cliente/${id}`))
  }

}