import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PostService {
  private postsUrl = 'https://publishing-project.rivendellweb.net/wp-json/wp/v2/posts';

  constructor(private http: HttpClient) {}

  getPosts<Any>() {
    return this.http.get(this.postsUrl + '?_embed');
  }

  getPost<Number>(id) {
    return this.http.get(`${this.postsUrl}/${id}?_embed`);
  }
  getPostBySlug<Any>(slug) {
    return this.http.get(`${this.postsUrl}/${slug}?_embed`);
  }
}
