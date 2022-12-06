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
    // private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  public pedidos: Pedido[] = []
  public clientes: Cliente[] = []
  cliente: Cliente = {} as Cliente
  pedido: Pedido = {} as Pedido
  nomeCliente!: String

  private async getPedidos() {
    this.pedidos = await this.pedidoService.getPedidos();
    //  this.getCliente();
    // this.getClienteById(this.pedido.id);
    // this.getClienteAtual();
  }

  async excluir(pedido: Pedido) {
    if (confirm("Deseja mesmo excluir esse produto?"))
      await this.pedidoService.deletePedidoById(pedido.id)
    this.getPedidos()
  }

  public async getClientes() {
    this.clientes = await this.clienteService.getClientes();
  }

   async getClienteById(id: any) {
    this.cliente = await this.clienteService.getClienteById(id);
    return this.cliente.id
  }


  getClientesAtual() {
    this.pedidos.forEach(pedido => {
      this.getClienteById(pedido.idCliente)
      this.clientes.forEach(cliente => {
        if (this.pedido.idCliente == this.cliente.id) {
          this.cliente = cliente
        }
      });
    });
  }

  // getClienteAtual() {
  //   const idCliente = this.activedRoute.snapshot.paramMap.get('id')
  //   this.clienteService.getClienteById(idCliente).subscribe({ next: (resp: Cliente) => this.onSucesso(resp) })
  // }

  // onSucesso(resp: Cliente) {
  //   this.nomeCliente = resp.nome
  // }

  // getCliente() {
  //   this.pedidos.forEach(pedido => {
  //     if (this.pedido.idCliente == this.cliente.id) {
  //       this.getClienteById(pedido.idCliente)
  //       console.log("caiu aq?")
  //       console.log(this.cliente)
  //     }
  //   });
  // }

  public async addPedido() {
    this.router.navigate([`pedidos/novo`])
  }
}