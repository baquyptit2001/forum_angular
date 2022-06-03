import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../Service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Constants} from "../../Config/constants";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService, MatSnackBar]
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  });

  constructor( private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.signUp(this.registerForm.value).subscribe(
      (data: any) => {
        console.log(data);
        // @ts-ignore
        this._snackBar.open(data.message, 'Ok', Constants.snackBarConfig);
      },
      (error: any) => {
        console.log(error);
        // @ts-ignore
        this._snackBar.open(error.error.message, 'Ok', Constants.snackBarConfig);
      }
    );
  }

}
