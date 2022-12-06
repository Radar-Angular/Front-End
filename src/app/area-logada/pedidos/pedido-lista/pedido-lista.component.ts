import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private clienteService: ClienteService,
    private route: Router
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



alterar(idContato: Number){
  this.route.navigate([`pedidos/${idContato}/editar`])
}




}
