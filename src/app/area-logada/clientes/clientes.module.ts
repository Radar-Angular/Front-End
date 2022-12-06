import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteFormularioComponent } from './cliente-formulario/cliente-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CpfPipe } from 'src/app/shared/pipes/cpf.pipe';


@NgModule({
  declarations: [
    ClienteListaComponent,
    ClienteFormularioComponent,
    CpfPipe,
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ClientesModule { }

    
