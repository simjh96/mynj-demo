import { Component, OnInit } from '@angular/core';

import { FeedService } from '../../services/feed.service';
import { Feed } from '../../interface/feed';
import { Router } from '@angular/router';

@Component({
  selector: 'app-town',
  templateUrl: './town.page.html',
  styleUrls: ['./town.page.scss'],
})
export class TownPage implements OnInit {
  feeds: Feed[];
  type = 'myTown';

  constructor(private feedService: FeedService, private router: Router) {}

  ngOnInit() {
    this.feeds = this.feedService.getAllFeeds();
  }

  segmentChanged(event: CustomEvent<any>) {
    this.router.navigateByUrl('/tabs/town/magazine');
  }

  onFeedClick() {
    console.log('working');
  }
}
