import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSelectPageRoutingModule } from './map-select-routing.module';

import { MapSelectPage } from './map-select.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSelectPageRoutingModule
  ],
  declarations: [MapSelectPage]
})
export class MapSelectPageModule {}
