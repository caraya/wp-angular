import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { PostsListComponent } from './posts-list/posts-list.component';
import { SafePipe } from './safe.pipe';
import { PrismService } from './prism.service';

@NgModule({
  declarations: [AppComponent, PostsListComponent, SafePipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [PostService, PrismService],
  bootstrap: [AppComponent]
})
export class AppModule {}
