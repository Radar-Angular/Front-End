import { Component, OnInit, ÉµpublishDefaultGlobalUtils } from '@angular/core';
import { end } from '@popperjs/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { bindCallback } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';
import { Produto } from 'src/app/shared/models/produto';
import { ProdutoService } from 'src/app/shared/services/produto.service';
Chart.register(...registerables);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    this.getTotalVendasPorMes();
    this.getPedidosMeses();
    this.qtsClientes();
  }

  pedido: Pedido[] = []
  pedidos: Pedido[] = []
  clientes: Cliente[] = []
  cliente: Cliente = {} as Cliente
  produto: Produto[] = []
  produtos: Produto[] = []

  qtdClientes: number = 0
  valorTotal: number = 0
  async calculavalores() {
    this.pedido = await this.pedidoService.getPedidos()
    this.pedido.forEach(item => {
      this.valorTotal = this.valorTotal + item.valorTotal
    });
    return this.valorTotal
  }

  async qtsClientes() {
    this.clientes = await this.clienteService.getClientes()
    this.qtdClientes = this.clientes.length
    return this.qtdClientes
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



  public async getDiasVendas() {
    const dias: number[] = []
    this.pedidos = await this.pedidoService.getPedidos();
    this.pedidos.forEach(pedido => dias.push(new Date(pedido.data).getDate()));
    console.log(dias);
    return dias
  }


  async getPedidosMeses() {
    const meses: number[] = []
    let valorMes: number[] = []
    let valor: number = 0
    this.produtos = await this.produtoService.getProdutos();
    this.pedidos.forEach(pedido => meses.push(new Date(pedido.data).getMonth()),
      this.pedidos.forEach(item => {
        valor = valor + item.valorTotal
        if (!meses)
          valorMes.push(valor)
      }))
    console.log(this.pedidos)
    valorMes.push(valor)
    console.log(valor)
    console.log(valorMes)
    return meses
  }





  async getTotalVendasPorMes() {
    let venda = 0
    const vendas: Array<Array<number>> = [[], [], [], [], [], [], [], [], [], [], [], []]
    this.pedidos = await this.pedidoService.getPedidos()
    this.pedidos.forEach((pedido, index, array) => {
      for (let i = 0; i < vendas.length; i++) {
        if (new Date(pedido.data).getMonth() == i) {
          this.pedidos.forEach(valor => {
            venda = venda + valor.valorTotal
          });
        }
        vendas[i].push(venda)
      }

      // console.log(vendas);
    })
    return vendas
  }






  RenderChart() {
    const myChart = new Chart("grafVendas", {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Mar?§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
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
        }, {
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
        labels: ['Janeiro', 'Fevereiro', 'Mar?§o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Pedidos',
          data: [12, 19, 3, 5, 2, 3, 15, 20, 12, 13, 18, 19],
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