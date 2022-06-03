import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../Config/constants";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient, private cookieService: CookieService) {

  }

  signUp(account: any) {
    return this.http.post(Constants.END_POINT + 'user/sign-up', account);
  }

  signIn(account: any) {
    return this.http.post(Constants.END_POINT + 'user/sign-in', account);
  }


  logOut() {
    //add bearer token
    let token = this.cookieService.get('token');
    let headers = {
      'Authorization': 'Bearer ' + token
    };
    return this.http.get(Constants.END_POINT + 'user/log-out', {headers: headers});
  }

  userSaveCookie(user: any, token = '') {
    this.cookieService.set('user.id', user.id);
    this.cookieService.set('user.name', user.name);
    this.cookieService.set('user.email', user.email);
    this.cookieService.set('user.avatar', user.avatar);
    if (token != '') {
      this.cookieService.set('token', token);
    }
  }

  userDeleteCookie() {
    this.cookieService.delete('user.id');
    this.cookieService.delete('user.name');
    this.cookieService.delete('user.email');
    this.cookieService.delete('user.avatar');
    this.cookieService.delete('token');
  }

}

