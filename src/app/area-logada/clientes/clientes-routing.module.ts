import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaComponent
  },
  {
    path: 'novo',
    component: ClienteFormularioComponent
  },
  {
    path: ':id/editar',
    component: ClienteFormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
