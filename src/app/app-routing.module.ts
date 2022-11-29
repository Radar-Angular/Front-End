import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './area-logada/home/home.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { NaoEstaLogadoGuard } from './shared/guards/nao-esta-logado.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./area-logada/area-logada.module').then(m => m.AreaLogadaModule),
    canActivate: [EstaLogadoGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [NaoEstaLogadoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
