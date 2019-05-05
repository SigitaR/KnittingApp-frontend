import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from 'src/entities/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(post: Post): Observable<Post> {
    return this.http.post<Post>(environment.API_URL + 'newPost', post, httpOptions);
  }

}
