import { Injectable } from '@angular/core';
import {Post} from "../Model/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  addPost(post: Post) {
    console.log(post);
  }

}
