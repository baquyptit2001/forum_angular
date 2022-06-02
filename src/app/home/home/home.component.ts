import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Home';

  constructor(private titleService: Title) {
    this.setTitle(this.title);
  }

  ngOnInit(): void {
    this.setTitle(this.title);
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
