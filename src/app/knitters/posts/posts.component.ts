import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/services/post.service';
import { Post } from 'src/entities/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
// posts: Post[]  =
// [{title: 'hey', text: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad',
//  imageUrl: 'https://kea.dk/slir/w1024-c100x72/images/DA/Om-KEA/om-kea.jpg',
//   timestamp: '2019-05-07T21:46:15.193Z', creator: ''},
//  {title: 'hey1', text: 'Lorem ipsum dolor sit amet, id quo eruditi eloquentiam. Assum decore te sed. Elitr scripta ocurreret qui ad', 
//  imageUrl: 'https://kea.dk/slir/w1024-c100x72/images/DA/Om-KEA/om-kea.jpg',
//   timestamp: '2019-05-07T21:46:15.193Z', creator: ''}];
posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.allPosts()
    .subscribe(result => this.posts.push(...result));
  }

}
