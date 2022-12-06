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
          data: [23695.32, 24941.12, 23641.71, 25691.23, 24105.23, 27199.12, 24072.55, 29501.12, 28356.51, 28151.13, 29512.51, 7512.73],
          borderWidth: 2,
          backgroundColor: [
            '#FF8400'
          ],
          borderColor: [
            '#FF8400'
          ]
        },{
          label: 'Metas (em R$)',
          data: [24500.32, 24530.12, 26941.71, 27435.23, 27912.23, 28909.12, 27812.55, 27986.12, 28013.51, 27812.13, 28512.51, 32664.05],
          borderWidth: 2,
          backgroundColor: [
            '#1a1918'
        ],
          borderColor: [
            '#1a1918'
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
        data: [564, 621, 594, 702, 754, 657, 782, 671, 764, 812, 876, 360],
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

