import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoFormularioComponent } from './produto-formulario/produto-formulario.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    ProdutoFormularioComponent,
    ProdutoListaComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
  ]
})
export class ProdutosModule { }
