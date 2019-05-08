import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/entities/post';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
posts: Post[] = [];
serverUrl = environment.IMAGES;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.myPosts()
    .subscribe(result => this.posts.push(...result));
  }

}
