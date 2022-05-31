import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { LoginI } from '../modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from '../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    usuario: new FormControl(' ', Validators.required),
    clave: new FormControl(' ', Validators.required),
  });

  constructor(private login: LoginService, private router: Router) {}

  errorStatus: boolean = false;
  errorMsj: any = '';

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['formulario']);
    }
  }

  onLogin(form: LoginI) {
    this.login.loginByusuario(form).subscribe((data) => {
      let dataResponse: ResponseI = data;
      if (dataResponse.status == 'ok') {
        localStorage.setItem('token', dataResponse.result.token);
        this.router.navigate(['formulario']);
      } else {
        this.errorStatus = true;
        this.errorMsj = dataResponse.result.console.error_msg;
      }
    });
  }
}
