import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EstaLogadoGuard implements CanActivate {

constructor(
  private authService: AuthService,
  private router: Router
){

}

  canActivate():boolean {

      const estaLogado = this.authService.estaLogado();
      if(estaLogado){
        return true
      }
      this.router.navigate(['login'])
    return false
  }
  
}
