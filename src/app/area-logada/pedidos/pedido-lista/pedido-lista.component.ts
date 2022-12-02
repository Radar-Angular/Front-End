import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { Pedido } from 'src/app/shared/models/pedido';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.css']
})
export class PedidoListaComponent implements OnInit {

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService
    ) { }

    

  ngOnInit(): void {
    this.getPedidos()
  }

  public pedidos:Pedido[] = []
  public clientes:Cliente[]= []
  cliente:Cliente = {} as Cliente
  idCliente: Number = 0

 private async getPedidos(){
   this.pedidos  =  await this.pedidoService.getPedidos();
  }

  public async getClientes(){
    this.clientes = await this.clienteService.getClientes();
  }

  private async getClienteById(id: Number){
        for(let i = 0; i < this.pedidos.length; i++){
          if(this.pedidos[i].id ==  this.clientes[i].id){
            id = this.clientes[i].id
          }
        this.cliente =  await this.clienteService.getClienteById(id)
        }
  }

// var clienteTemplate = this.clientes.map(cliente => {
//     cliente.id = this.pedidos.filter(pedidos => cliente.id === pedidos.idCliente)
//     return cliente
// })



}
