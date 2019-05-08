import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from 'src/entities/post';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptions2 = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }) // for multipart data
};

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  newPost(post: any): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'newPost', post);
  }

  myPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + 'getPosts', httpOptions);
  }
  allPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_URL + 'getAllPosts', httpOptions);
  }
  uploadImage(image) {
    return this.http.post(environment.API_URL + 'uploadImage', image);
  }


}
