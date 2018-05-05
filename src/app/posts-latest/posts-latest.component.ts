import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: '    posts-latest',
  templateUrl: './posts-latest.component.html',
  styleUrls: ['./posts-latest.component.css']
})
export class PostsLatestComponent implements OnInit {
  public posts;

  constructor (private _postsService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._postsService.getPosts().subscribe(
      data => {
        this.posts = data;
      },
      err => console.error(err),
      () => console.log(this.posts)
    );
  }

}
