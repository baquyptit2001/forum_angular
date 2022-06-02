import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  title = 'Post';

  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }

  ngOnInit() {
    this.setTitle(this.title);
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
