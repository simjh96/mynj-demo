import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  @Input() url = '/';
  items: any;
  swiperConfig: SwiperOptions = {
    slidesPerView: 3,
    scrollbar: { draggable: true, hide: true },
  };
  constructor(
    private seedService: SeedService,
    private navController: NavController
  ) {}

  ngOnInit() {
    this.items = this.seedService.getAllSeeds();
  }

  onClickCategory() {
    console.log('button clicked');
  }
  openPage(url: string) {
    this.navController.navigateForward(url, {});
  }
}
