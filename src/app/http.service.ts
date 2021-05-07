import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseurl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get<any>(this.baseurl);
  }
  removePosts(post) {
    return this.http.delete<any>(this.baseurl);
  }
}
