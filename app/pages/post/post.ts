import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SafeHtml } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
// provider in app/providers
import { PostService } from '../../providers/post-service';
// custom helper class in app/models
import { Helper } from '../../models/helper';

@Component({
  providers: [PostService, Helper],
  templateUrl: 'build/pages/post/post.html'
})

export class Post {

  private post: any;

  // data fields for posts.json
  // not yet manipulated - entire post object is in navParams
  //public id: number;
  //private url: string;
  //private title: string;
  //private content: SafeHtml;
  //private image_url: string;
  //private published_at: string;

  constructor(public navCtrl: NavController, private navParams: NavParams,  public postService: PostService, private helper: Helper) {
    this.post = this.navParams.get('post');
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
