import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { Cliente } from 'src/app/shared/models/cliente';
import { Pedido } from 'src/app/shared/models/pedido';
import { Produto } from 'src/app/shared/models/produto';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';
Chart.register(...registerables);

@Component({
  selector: 'app-fluxo-de-caixa',
  templateUrl: './fluxo-de-caixa.component.html',
  styleUrls: ['./fluxo-de-caixa.component.css']
})
export class FluxoDeCaixaComponent implements OnInit {

  constructor(
    private pedidoService: PedidoService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService,
  ) { }

  ngOnInit(): void {
    this.RenderChart();
    this.calculavalores();
    this.getPedidos();
    this.getProdutos();
  }

  pedido: Pedido[] = []
  pedidos: Pedido[] = []
  clientes: Cliente[] = []
  cliente: Cliente = {} as Cliente
  produto: Produto[] = []
  produtos: Produto[] = []

  valorTotal: number = 0
  async calculavalores() {
    this.pedido = await this.pedidoService.getPedidos()
    this.pedido.forEach(item => {
      this.valorTotal = this.valorTotal + item.valorTotal
      console.log(this.valorTotal)
    });
  }
  
  // TABELA PEDIDOS
  private async getPedidos() {
    this.pedidos = await this.pedidoService.getPedidos();
  }

  public async getClientes() {
    this.clientes = await this.clienteService.getClientes();
  }

  // TABELA ESTOQUE
  private async getProdutos() {
    this.produtos = await this.produtoService.getProdutos();
  }


  RenderChart() {
    const myChart = new Chart("grafVendas", {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Vendas (em R$)',
          data: [5572.32, 5987.12, 6941.71, 7435.23, 7912.23, 8909.12, 7812.55, 7986.12, 8013.51, 7812.13, 8512.51, 7512.73],
          borderWidth: 2,
          backgroundColor: [
            '#FF8400'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ]
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    const myChart2 = new Chart("grafPedidos", {
      type: 'bar',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Pedidos (quantidade)',
          data: [564,621,594,702,754,657,782,671,764,812,876,360],
          borderWidth: 1,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }
}

