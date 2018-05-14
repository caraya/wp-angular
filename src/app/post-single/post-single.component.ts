import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from '../post.service';
import { switchMap } from 'rxjs/operators';
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
    // console.log('In constructor:', this.route.params);
  }

  ngOnInit() {
    this.getPost(this.route + "?_embed");
  }

  getPost(id) {
    this.route.params.pipe(
      switchMap(params => this._postService.getPost(params.id))
    )
    .subscribe(
      data => {
        this.post = data;
      },
      err => console.error(err),
      () => {
        console.log(this.post.slug);
        console.log('On Post, params: ', this.route.params);
        console.log('On Post, fragment: ', this.route.fragment);
      }
    );
  }
}
