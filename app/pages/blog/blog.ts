import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../post/post';
// provider in app/providers
import { PostService } from '../../providers/post-service';
// custom helper class in app/models
import { Helper } from '../../models/helper';

@Component({
  providers: [PostService, Helper],
  templateUrl: 'build/pages/blog/blog.html',
})
export class Blog {

  private post: any;
  archive: Array<Object> = [];

  constructor(public navCtrl: NavController, public postService: PostService, private navParams: NavParams, private helper: Helper) {
    this.getPosts();
  }

  getPosts() {
    this.postService.getAll().subscribe(
      data => this.archive = data
    );
  }

  viewPost(event, post) {
    let id: number = post['id'];
    this.navCtrl.push(Post, { post: post });
  }

  // function to set a default for non existing image
  verifyImage(url: string) {
    return this.helper.verifyImage(url);
  }

  // human readable if >= than 7 days ago using moment
  formatDate(dateString: string) {
    return this.helper.formatDate(dateString);
  }

}
