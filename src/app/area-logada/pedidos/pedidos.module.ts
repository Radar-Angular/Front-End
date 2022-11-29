import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidoListaComponent } from './pedido-lista/pedido-lista.component';
import { PedidoFormularioComponent } from './pedido-formulario/pedido-formulario.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PedidoListaComponent,
    PedidoFormularioComponent,
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    FormsModule,
  ]
})
export class PedidosModule { }
