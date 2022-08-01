import { Component, Input, OnInit } from '@angular/core';
import { Feed } from 'src/app/interface/feed';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {
  @Input() f: Feed;
  type = 'myTown';

  constructor() {}

  ngOnInit() {}
}
