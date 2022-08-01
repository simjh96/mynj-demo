import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertLandingPageRoutingModule } from './alert-landing-routing.module';

import { AlertLandingPage } from './alert-landing.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertLandingPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [AlertLandingPage],
})
export class AlertLandingPageModule {}
