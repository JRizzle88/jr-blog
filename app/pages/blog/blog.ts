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

  private jsonData: string = '../../../data/posts.json';
  private post: any;
  archive: Array<Object> = [];

  constructor(public navCtrl: NavController, private navParams: NavParams, public http: Http) {
    this.post = Post;
  }

  ngOnInit() {
    this.getPosts();
    console.log(this.getPosts());
    console.log(this.archive);
  }

  getPosts() {
    //return this.http.get(this.jsonData).map(res => res.json());
    return this.http.get(this.jsonData).map((res: Response) => res.json()).subscribe(res => this.archive = res);
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

  logError(err) {
    console.error('There was an error: ' + err);
  }
}
