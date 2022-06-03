import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "./post/add/add.component";
import {PostService} from "./Service/post.service";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "./Service/user.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Constants} from "./Config/constants";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService, UserService, MatSnackBar]
})
export class AppComponent {
  title = 'forum-fe';
  isLoggedIn: boolean;
  user: any = {};

  constructor(public dialog: MatDialog, private postService: PostService, private cookieService: CookieService, private userService: UserService, private _snackBar: MatSnackBar, private router: Router) {
    this.isLoggedIn = this.cookieService.check('token');
    if (this.isLoggedIn) {
      this.user.name = this.cookieService.get('user.name');
      this.user.email = this.cookieService.get('user.email');
      this.user.avatar = this.cookieService.get('user.avatar');
    }
  }

  login() {
    if (this.isLoggedIn) {
      this.user.name = this.cookieService.get('user.name');
      this.user.email = this.cookieService.get('user.email');
      this.user.avatar = this.cookieService.get('user.avatar');
    }
  }

  openAddPostForm() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '1000px',
      data: {title: "", content: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.postService.addPost(result);
    });

  }

  logOut() {
    this.userService.logOut().subscribe(res => {
      // @ts-ignore
      if (res.status_code === 200) {
        this.userService.userDeleteCookie();
        this.isLoggedIn = false;
        // @ts-ignore
        this._snackBar.open(res.message, 'Ok', Constants.snackBarConfig);
        this.router.navigate(['/account']);
      } else {
        // @ts-ignore
        this._snackBar.open('Logged out failed !', 'Ok', Constants.snackBarConfig);
      }
    });
  }


}
