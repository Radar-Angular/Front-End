import { Component, OnInit, ɵpublishDefaultGlobalUtils } from '@angular/core';
import { end } from '@popperjs/core';
import { Chart, registerables } from 'node_modules/chart.js'
import { bindCallback } from 'rxjs';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/services/cliente.service';
import { Pedido } from 'src/app/shared/models/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';
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
  ) { }

  ngOnInit(): void {
    this.RenderChart();
    this.calculavalores();
    this.getPedidos()
  }

  pedido: Pedido[] = []
  pedidos: Pedido[] = []
  clientes: Cliente[] = []
  cliente: Cliente = {} as Cliente


  valorTotal: number = 0
  async calculavalores() {
    this.pedido = await this.pedidoService.getPedidos()
    this.pedido.forEach(item => {
      this.valorTotal = this.valorTotal + item.valorTotal
      console.log(this.valorTotal)
    });
  }

  private async getPedidos() {
    this.pedidos = await this.pedidoService.getPedidos();
  }

  public async getClientes() {
    this.clientes = await this.clienteService.getClientes();
  }

  RenderChart() {
    const myChart = new Chart("grafVendas", {
      type: 'line',
      data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
          label: 'Vendas',
          data: [12, 19, 3, 5, 2, 3, 15, 20, 12, 13, 18, 19],
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
