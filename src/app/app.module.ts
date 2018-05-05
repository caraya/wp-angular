// Default Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Additional imports
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { NotFoundComponent } from './not-found/not-found.component';
// Pipes
import { SafePipe } from './safe.pipe';
// Services
import { PostService } from './post.service';
import { PostsLatestComponent } from './posts-latest/posts-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostSingleComponent,
    PostsLatestComponent,
    NotFoundComponent,
    SafePipe,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
