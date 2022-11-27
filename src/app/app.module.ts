import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './clientes/cliente-formulario/cliente-formulario.component';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { PedidoListaComponent } from './pedidos/pedido-lista/pedido-lista.component';
import { PedidoFormularioComponent } from './pedidos/pedido-formulario/pedido-formulario.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HomeComponent } from './componentes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    ClienteFormularioComponent,
    ProdutoListaComponent,
    ProdutoFormularioComponent,
    PedidoListaComponent,
    PedidoFormularioComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
