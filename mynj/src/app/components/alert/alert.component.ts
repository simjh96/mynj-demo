import { Component, OnInit } from '@angular/core';
import { SeedService } from 'src/app/services/seed.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  items: any;
  constructor(private seedService: SeedService) {}

  ngOnInit() {
    this.items = this.seedService.getAllSeeds();
  }

  onClickCategory() {
    console.log('button clicked');
  }
}
