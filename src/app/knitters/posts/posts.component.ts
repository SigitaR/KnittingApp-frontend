import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/entities/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.allPosts()
    .subscribe(result => this.posts.push(...result));
  }

}
