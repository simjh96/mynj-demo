import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapSelectPageRoutingModule } from './map-select-routing.module';

import { MapSelectPage } from './map-select.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapSelectPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MapSelectPage],
})
export class MapSelectPageModule {}
