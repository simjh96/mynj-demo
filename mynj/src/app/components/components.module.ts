import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxThreeModule } from 'ngx-three';
import { GldLoaderComponent } from './gld-loader/gld-loader.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { MapComponent } from './map/map.component';
import { SearchTabComponent } from './search-tab/search-tab.component';
import { ModalComponent } from './modal/modal.component';
import { SeedFallComponent } from './seed-fall/seed-fall.component';
import { SwiperModule } from 'swiper/angular';
import { CircleSwiperComponent } from './circle-swiper/circle-swiper.component';
import { AlertComponent } from './alert/alert.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { FakeTabComponent } from './fake-tab/fake-tab.component';
import { MarketComponent } from './market/market.component';
import { TownComponent } from './town/town.component';
import { GreetingComponent } from './greeting/greeting.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxThreeModule,
    PinchZoomModule,
    SwiperModule,
  ],
  declarations: [
    AlertComponent,
    CircleSwiperComponent,
    DefaultHomeComponent,
    FakeTabComponent,
    FeedCardComponent,
    GldLoaderComponent,
    GreetingComponent,
    GridViewComponent,
    MapComponent,
    MarketComponent,
    ModalComponent,
    PopUpComponent,
    SearchTabComponent,
    SeedFallComponent,
    TownComponent,
  ],
  exports: [
    AlertComponent,
    CircleSwiperComponent,
    DefaultHomeComponent,
    FakeTabComponent,
    FeedCardComponent,
    GldLoaderComponent,
    GreetingComponent,
    GridViewComponent,
    MapComponent,
    MarketComponent,
    ModalComponent,
    PopUpComponent,
    SearchTabComponent,
    SeedFallComponent,
    TownComponent,
  ],
})
export class ComponentsModule {}
