import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostService } from 'src/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  constructor( private postService: PostService, private router: Router) { }

  postForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    imageUrl: new FormControl('')
    });

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.postForm.value);
    if (this.postForm.valid) {
      this.postService.newPost(this.postForm.value).subscribe((result: any) => {
        console.log(result);
        if (result.status === 201) {
            this.router.navigate(['allposts']);
        } else if (result.status === false) {
          alert('something went wrong');
        }
      });
    }
  }




}
