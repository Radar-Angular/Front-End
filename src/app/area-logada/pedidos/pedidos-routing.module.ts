import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoFormularioComponent } from './pedido-formulario/pedido-formulario.component';
import { PedidoListaComponent } from './pedido-lista/pedido-lista.component';

const routes: Routes = [
  {
    path: '',
    component: PedidoListaComponent,
  },
  {
    path: 'novo',
    component: PedidoFormularioComponent
  },
  {
    path: ':id/editar',
    component: PedidoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
