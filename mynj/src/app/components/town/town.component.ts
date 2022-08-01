import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Feed } from 'src/app/interface/feed';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-town',
  templateUrl: './town.component.html',
  styleUrls: ['./town.component.scss'],
})
export class TownComponent implements OnInit {
  feeds: Feed[];
  type = 'myTown';

  constructor(
    private feedService: FeedService,
    private router: Router,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.feeds = this.feedService.getAllFeeds();
  }

  segmentChanged(event: CustomEvent<any>) {
    this.router.navigateByUrl('/tabs/town/magazine');
  }

  onFeedClick() {
    console.log('working');
  }
  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
