import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Service/user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signIn(this.loginForm.value).subscribe(
      (data: any) => {
        this.cookieService.set('token', data.token);
        this.cookieService.set('user.name', data.user.name);
        this.cookieService.set('user.email', data.user.email);
        this.cookieService.set('user.avatar', data.user.avatar);
        console.log(this.cookieService.getAll());
      },
      (error: any) => {
        console.log(error);
      });
  }

}
