import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = []    
  cliente: Cliente = {} as Cliente

  constructor(
    private clienteService: ClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  qtdClientes = 0

  private async buscarClientes() {
    this.clientes = await this.clienteService.getClientes();
    this.qtdClientes = this.clientes.length
  }

  editarCliente(idCliente: number) {
    this.router.navigate([`clientes/${idCliente}/editar`])
  }

  async excluir(cliente: Cliente) {
    if (confirm("Deseja mesmo excluir esse cliente?"))
      await this.clienteService.deleteClienteById(cliente.id)
    this.buscarClientes()
  }

  public async addCliente() {
    this.router.navigate([`clientes/novo`])
  }
  
}