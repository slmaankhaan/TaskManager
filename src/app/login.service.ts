import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import { LoginViewModel } from './login-view-model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient: HttpClient | null = null;
  // constructor(private httpClient: HttpClient)
  constructor(private httpBackend: HttpBackend, private jwtHelperService: JwtHelperService){}

  currentUserName: string = "";
  public Login(loginViewModel: LoginViewModel): Observable<any> {
    this.httpClient = new HttpClient(this.httpBackend)
    return this.httpClient
      .post<any>('/authenticate', loginViewModel, { responseType: 'json' })
      .pipe(
        map((user) => {
          if (user) {
            this.currentUserName = user.UserName
            sessionStorage.currentUser = JSON.stringify(user);
          }
          return user;
        })
      );
  }

  public Logout()
  {
    sessionStorage.removeItem("currentUser")
    this.currentUserName = "";

  }

  public isAuthenticated() : boolean {
    let token = sessionStorage.getItem("currentUser")?JSON.parse(sessionStorage.getItem("currentUser") as string).token:null;
    if (this.jwtHelperService.isTokenExpired()){
      return false; // token is not valid
    }
    else {
      return true; // token is valid
    }
  }
}
