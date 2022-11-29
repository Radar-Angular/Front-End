import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadaComponent } from './area-logada/area-logada.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AreaLogadaComponent,
    children: [{
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path:'clientes',
      loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
      path:'produtos',
      loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)
    },
    {
      path:'pedidos',
      loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaLogadaRoutingModule { }
