import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FluxoDeCaixaComponent } from './fluxo-de-caixa/fluxo-de-caixa.component';


@NgModule({
    declarations: [
        AreaLogadaComponent,
        FluxoDeCaixaComponent
    ],
    imports: [
        CommonModule,
        AreaLogadaRoutingModule,
        SharedModule,
       
    ]
})
export class AreaLogadaModule { }
