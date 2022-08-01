import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertLandingPage } from './alert-landing.page';

const routes: Routes = [
  {
    path: '',
    component: AlertLandingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertLandingPageRoutingModule {}
