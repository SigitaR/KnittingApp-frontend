import { Component, OnInit } from '@angular/core';
import { Post } from 'src/entities/post';
import { PostService } from 'src/services/post.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  serverUrl = environment.IMAGES;

  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postService.allPosts()
    .subscribe(result => this.posts.push(...result));
  }
}
