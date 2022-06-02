import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PostService} from "../../Service/post.service";
import {Post} from "../../Model/Post";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  post: Post = new Post();
  constructor(public dialogRef: MatDialogRef<AddComponent>,
              @Inject(MAT_DIALOG_DATA) public postData: Post,
              private PostService: PostService
  ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPost() {
    this.PostService.addPost(this.post);
  }

}
