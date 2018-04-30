import {
  Component,
  OnInit,
  AfterViewChecked
} from '@angular/core';
import { PostService } from '../post.service';
import { PrismService } from '../prism.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  public posts;
  highlighted: boolean = false;

  constructor(
    private _postsService: PostService,
    private _prismService: PrismService
  ) {}

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

  /**
   * Highlight blog post when it's ready
   */
  ngAfterViewChecked() {
    if (!this.highlighted) {
      this._prismService.highlightAll();
      this.highlighted = true;
    }
  }
}
