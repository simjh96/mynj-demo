import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage {
  isShow = true;
  constructor() {
    // setTimeout(() => {
    //   this.isShow = false;
    // }, 10000);
  }
}
