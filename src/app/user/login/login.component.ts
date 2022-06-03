import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Service/user.service";
import {CookieService} from "ngx-cookie-service";
import {Constants} from "../../Config/constants";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService, MatSnackBar]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private userService: UserService, private cookieService: CookieService, private _snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signIn(this.loginForm.value).subscribe(
      (data: any) => {
        this.userService.userSaveCookie(data.user, data.token);
        console.log(this.cookieService.getAll())
        // @ts-ignore
        this._snackBar.open(data.message, 'Ok', Constants.snackBarConfig);
        window.location.href="";

      },
      (error: any) => {
        // @ts-ignore
        this._snackBar.open(error.error.error, 'Ok', Constants.snackBarConfig);
        console.log(error);
      });
  }

}
