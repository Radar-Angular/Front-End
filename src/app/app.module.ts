import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './clientes/cliente-formulario/cliente-formulario.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { ProdutosListaComponent } from './produtos/produtos-lista/produtos-lista.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { PedidoListaComponent } from './pedidos/pedido-lista/pedido-lista.component';
import { PedidoFormularioComponent } from './pedidos/pedido-formulario/pedido-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteFormularioComponent,
    ProdutosListComponent,
    ProdutosListaComponent,
    ProdutoListaComponent,
    ProdutoFormularioComponent,
    PedidoListaComponent,
    PedidoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
