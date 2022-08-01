import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaskSelectPage } from './mask-select.page';

const routes: Routes = [
  {
    path: '',
    component: MaskSelectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaskSelectPageRoutingModule {}
