import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgxThreeModule } from 'ngx-three';
import { GldLoaderComponent } from './gld-loader/gld-loader.component';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import { MapComponent } from './map/map.component';
import { SearchTabComponent } from './search-tab/search-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxThreeModule,
    PinchZoomModule,
  ],
  declarations: [GldLoaderComponent, MapComponent, SearchTabComponent],
  exports: [GldLoaderComponent, MapComponent, SearchTabComponent],
})
export class ComponentsModule {}
