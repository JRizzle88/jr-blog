import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Blog } from '../blog/blog';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class Home {

  constructor(public navCtrl: NavController) {
  }
}
