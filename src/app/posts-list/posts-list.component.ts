import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts;

  constructor(private _postsService: PostService) {}

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
