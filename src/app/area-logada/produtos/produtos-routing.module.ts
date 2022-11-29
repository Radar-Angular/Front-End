import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListaComponent,

  },
  {
    path: 'novo',
    component: ProdutoFormularioComponent
  },
  {
    path: ':id/editar',
    component: ProdutoFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
