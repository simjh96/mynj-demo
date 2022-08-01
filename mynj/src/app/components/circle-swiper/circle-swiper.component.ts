import { Component, Input, OnInit } from '@angular/core';
import { SeedService } from 'src/app/services/seed.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-circle-swiper',
  templateUrl: './circle-swiper.component.html',
  styleUrls: ['./circle-swiper.component.scss'],
})
export class CircleSwiperComponent implements OnInit {
  @Input() title = '제목';
  @Input() isMore = true;
  @Input() subTitle = '부제목';
  items: any;
  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    scrollbar: { draggable: true, hide: true },
  };
  constructor(private seedService: SeedService) {}

  ngOnInit() {
    this.items = this.seedService.getAllSeeds();
  }

  onClickCategory() {
    console.log('button clicked');
  }
}
