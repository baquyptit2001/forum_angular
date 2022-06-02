import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddComponent} from "./post/add/add.component";
import {PostService} from "./Service/post.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forum-fe';

  constructor(public dialog: MatDialog, private postService: PostService) {
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
}
