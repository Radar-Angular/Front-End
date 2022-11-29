import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaLogadaRoutingModule } from './area-logada-routing.module';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        AreaLogadaComponent
    ],
    imports: [
        CommonModule,
        AreaLogadaRoutingModule,
        SharedModule,
       
    ]
})
export class AreaLogadaModule { }
