import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { ClientesModule } from '../clientes.module';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: Cliente[] = []  

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.buscarClientes();
  }

  private async buscarClientes() {
    this.clientes = await this.clienteService.getClientes();
  }
  
}
