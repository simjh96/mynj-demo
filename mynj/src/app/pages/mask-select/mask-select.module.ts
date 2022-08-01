import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaskSelectPageRoutingModule } from './mask-select-routing.module';

import { MaskSelectPage } from './mask-select.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaskSelectPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MaskSelectPage],
})
export class MaskSelectPageModule {}
