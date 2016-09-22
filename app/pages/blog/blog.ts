import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Post } from '../post/post';
import { Observable } from 'rxjs/Observable';
// required for .map()
import 'rxjs/Rx';

@Component({
  templateUrl: 'build/pages/blog/blog.html',
})
export class Blog implements OnInit {

  private jsonData = 'app/data/posts.json';
  private post: any;
  archive: Array<Object> = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, public http: Http) {
    this.post = Post;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): Observable<Object> {
    return this.http.get(this.jsonData).map(res => res.json());
  }

  prettyDate(date: string) {
    // use moment package to format
    // check for valid date else return error
  }

  viewPost(post: Object) {
    let id: string = post['id'];
    let url: string = post['url'];
    this.navCtrl.push(this.post, { 'id': id, 'url': url });
  }

}
