import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidoProduto } from 'src/app/shared/models/pedido-produto';
import { PedidoProdutoService } from 'src/app/shared/services/pedido-produto.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-pedido-formulario',
  templateUrl: './pedido-formulario.component.html',
  styleUrls: ['./pedido-formulario.component.css']
})
export class PedidoFormularioComponent implements OnInit {


  constructor(
    private router: Router,
    private route : ActivatedRoute,
    private http: HttpClient,
    private pedidoService: PedidoService,
    private pedidoProdutoService: PedidoProdutoService
  ) { }

  titulo: string = "Novo Produto"


  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    if (id) {
      this.atualizarPedido(id)
    }
  }


  async atualizarPedido(id:number){
    this.titulo = "Alterando Produto"
    this.pedidoProduto = await this.pedidoProdutoService.getPedidoById(id)
    console.log(this.pedidoProduto)
  }

  public pedido: Pedido = {} as Pedido
  public pedidoProduto:PedidoProduto = {} as PedidoProduto

  
  salvarPedidoProduto(){
    this.pedidoProdutoService.postPedidoProduto(this.pedidoProduto)
    this.pedido.valorTotal = this.pedidoProduto.valor
    this.pedido.idCliente = 3
    this.salvarPedido();
  }

  
  salvarPedido(){
    this.pedidoService.postPedido(this.pedido)
    this.router.navigate(['pedidos'])
  }
}
