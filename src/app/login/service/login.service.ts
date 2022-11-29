import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, tap, throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginResponse } from '../model/loginResponse';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  emailMoc = "admin@radarfarm.com"
  senhaMoc = "12345678"

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }


  public login(email?:string , senha?: string) : Observable<LoginResponse> {
    
    if(email === this.emailMoc && senha === this.senhaMoc){
      return of({
        usuario: {
          nome: 'Adminstrador',
          sobrenome: 'Radar',
          email: 'admin@radarfarm.com',
        },
        token: 'fA54asifjAasG8fjfGaiS*7%d@sFOHEqfi7Y&hKis7üu¨GD@*ViNufas'
      })
        .pipe(
          delay(2000),
          tap((response) => {
            this.authService.setUsuario(response.usuario)
            this.authService.setToken(response.token)
          })
        );
    }
    return throwError("Usuario ou Senha incorretos.")
  }
}
