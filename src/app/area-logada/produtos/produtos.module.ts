import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProdutoFormularioComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ProdutosModule { }
