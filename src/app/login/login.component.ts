import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput: ElementRef | undefined

  @ViewChild('passwordInput') passwordInput: ElementRef | undefined

  email?:string
  password?: string

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    
  
    this.login()

  }

  login(){
    this.loginService.login(this.email, this.password)
    .subscribe(
      _response => this.onLoginSuccess(),
      _error => {
        console.log("Dados incorretos ")
      }
    );
  }

  onLoginSuccess(){
    this.router.navigate([''])
  }

  exibeErro(nomeControle: string, form:  NgForm) {
    if (!form.controls[nomeControle])
      return false

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched
  }


}
