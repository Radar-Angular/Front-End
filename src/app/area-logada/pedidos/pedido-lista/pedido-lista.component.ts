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
    private router: Router,
  ) { }



  ngOnInit(): void {
    this.getPedidos()
  }

  public pedidos: Pedido[] = []
  public clientes: Cliente[] = []
  cliente: Cliente = {} as Cliente
  pedido: Pedido = {} as Pedido

  private async getPedidos() {
    this.pedidos = await this.pedidoService.getPedidos();
    //  this.getCliente();
    this.getCliente();
  }

  public async getClientes() {
    this.clientes = await this.clienteService.getClientes();
  }

  async excluir(pedido: Pedido) {
    if (confirm("Deseja mesmo excluir esse produto?"))
      await this.pedidoService.deletePedidoById(pedido.id)
    this.getPedidos()
  }

  async getClienteById(id: number) {
    this.cliente = await this.clienteService.getClienteById(id);
    console.log("Sera que vaida bom?")
    return this.cliente
  }

  getCliente() {
    this.pedidos.forEach(pedido => {
      if (this.pedido.idCliente == this.cliente.id) {
        this.getClienteById(pedido.idCliente)
        console.log("caiu aq?")
        console.log(this.cliente)
      }
    });
  }

  getClientess() {
    this.pedidos.forEach(pedido => {
      this.getClienteById(pedido.idCliente)
      this.clientes.forEach(cliente => {
        if (this.pedido.idCliente == this.cliente.id) {
          this.cliente = cliente
        }
      });
    });
  }
  public async addPedido() {
    this.router.navigate([`pedidos/novo`])
  }
}