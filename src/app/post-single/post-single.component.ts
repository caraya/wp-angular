import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from '../post.service';

@Component({
  selector: 'post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})

@Injectable({
  providedIn: 'root',
})
export class PostSingleComponent implements OnInit {
  public post;
  public id;

  constructor(
    private _postService: PostService,
    private route: ActivatedRoute
  ) {
    console.log('In constructor:', this.route.params);
  }

  ngOnInit() {
    this.getPost(this.route.params + "?_embed");
    // console.log('On Init', this.route.params);
    // console.log(this.route.params.value.id)
  }

  getPost(id) {
    this._postService
      .getPost(this.route.params.value.id)
      .subscribe(
        data => {
          this.post = data;
        },
        err => console.error(err),
        () => console.log(this.post)
      );
  }
}
