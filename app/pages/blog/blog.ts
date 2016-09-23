import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../post/post';
import { PostService } from '../../providers/post-service';

@Component({
  templateUrl: 'build/pages/blog/blog.html',
  providers: [PostService]
})
export class Blog implements OnInit {

  private post: any;
  archive: Array<Object> = [];

  constructor(public navCtrl: NavController, public postService: PostService, private navParams: NavParams) {
    this.post = Post;
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService.load().subscribe(
      data => this.archive = data
    );
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
