import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TownPageRoutingModule } from './town-routing.module';
import { TownPage } from './town.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TownPage],
})
export class TownPageModule {}
