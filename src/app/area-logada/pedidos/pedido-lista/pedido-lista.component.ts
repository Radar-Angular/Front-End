import { Component, OnInit } from '@angular/core';
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

 private async getPedidos(){
   this.pedidos  =  await this.pedidoService.getPedidos();
  }

  private async getClienteById(id: Number){
    let cliente = 0
        for(let i = 0; i < this.pedidos.length; i++){
          if(this.pedidos[i].id ==  id){

        }
  }

  

  }
}
