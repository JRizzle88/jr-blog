import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  templateUrl: 'build/pages/post/post.html'
})
export class Post implements OnInit {

  private post: Object;
  private id: string;
  private url: string;
  private title: string;
  private content: SafeHtml;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.id = this.navParams.get('id');
    this.url = this.navParams.get('url');
  }

  ngOnInit() {
    this.view();
  }

  image() {
    // format image for url
  }

  prettyDate(date: string) {
    // use moment package to format
    // check for valid date else return error
  }

  view() {
    // pass object to view
  }

}
