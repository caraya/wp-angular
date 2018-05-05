import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsLatestComponent } from './posts-latest.component';

describe('PostsLatestComponent', () => {
  let component: PostsLatestComponent;
  let fixture: ComponentFixture<PostsLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
