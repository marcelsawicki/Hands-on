import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent {
  Http: HttpClient;
  BaseUrl: string;
  Router: Router;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, router: Router) {
    this.Http = http;
    this.BaseUrl = baseUrl;
    this.Router = router;
  }

  public loginProcess(login: string, password: string) {
    console.log("Login begin");
    this.Http.post<any>(this.BaseUrl + 'account/login', { login: login, password: password }).subscribe((result: any) => {
      console.log(result);
      this.Router.navigate(['/'])
    }, error => error => {
      console.error('przkierowanie' + error);
        //this.Router.navigate(['/unauthorized-message'])
    });
  }

  public logoutProcess() {
    console.log("Logout begin");
    this.Http.get<any>(this.BaseUrl + 'account/logout').subscribe((result: any) => {
      console.log(result);
      this.Router.navigate(['/'])
    }, error => console.error(error));
  }
}
