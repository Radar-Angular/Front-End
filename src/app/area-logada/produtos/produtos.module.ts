import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoFormularioComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule
  ]
})
export class ProdutosModule { }
