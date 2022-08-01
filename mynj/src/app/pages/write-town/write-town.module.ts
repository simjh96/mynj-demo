import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WriteTownPageRoutingModule } from './write-town-routing.module';

import { WriteTownPage } from './write-town.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WriteTownPageRoutingModule
  ],
  declarations: [WriteTownPage]
})
export class WriteTownPageModule {}
