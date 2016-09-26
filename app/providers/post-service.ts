import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// adds ALL RxJS statics & operators to Observable
import 'rxjs/Rx';
import { GLOBALS } from '../app.globals';
import { Post } from '../pages/post/post';

@Injectable()
export class PostService {

  private apiUrl: string;
  private postsUrl: string;

  constructor(private http: Http) {
      this.apiUrl = GLOBALS.api;
      this.postsUrl = this.apiUrl + 'posts.json';
  }

  // return all items
  getAll() {
    return this.http.get(this.postsUrl)
      .map(res => res.json())
      .catch(this.handleError);
  }

  // return a single item
  getOne(id: number) {
    return this.http.get(this.postsUrl)
      .map(res => <Post>res.json().filter(d => d.id === id))
      .catch(this.handleError);
  }

  // better error handling
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
