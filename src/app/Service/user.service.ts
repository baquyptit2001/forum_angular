import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Constants} from "../Config/constants";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signUp(account: any) {
    return this.http.post(Constants.END_POINT + 'user/sign-up', account);
  }

  signIn(account: any) {
    return this.http.post(Constants.END_POINT + 'user/sign-in', account);
  }

}

