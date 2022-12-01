import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-lista',
  templateUrl: './pedido-lista.component.html',
  styleUrls: ['./pedido-lista.component.css']
})
export class PedidoListaComponent implements OnInit {

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  public pedidos:Pedido[] = []

 private async getPedidos(){
   this.pedidos  =  await this.pedidoService.getPedidos();
  }
}
