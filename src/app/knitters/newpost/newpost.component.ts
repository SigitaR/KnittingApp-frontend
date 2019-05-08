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

  selectedFile: File = null; // faials kuri uploadinam

  postForm = new FormGroup({
    title: new FormControl(''),
    text: new FormControl('')
    });

   ngOnInit() {
  }

  onSubmit(form) {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('title', form.value.title);
    fd.append('text', form.value.text);
    if (form.valid) {
      this.postService.newPost(fd).subscribe((result: any) => {
        console.log(result);
        if (result.status === 201) {
            this.router.navigate(['myposts']);
        } else if (result.status === false) {
          alert('something went wrong');
        }
      });
    }
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

}
